import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  ImagePicker,
  ImagePickerOptions,
} from '@ionic-native/image-picker/ngx';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-homerepair',
  templateUrl: './homerepair.page.html',
  styleUrls: ['./homerepair.page.scss'],
})
export class HomerepairPage implements OnInit {
  constructor(private dataService: DataserviceService,
              private navCtrl: NavController,
              private imagePicker: ImagePicker,
              private assessmentService: AssessmentServiceService,
              private formBuilder: FormBuilder) {
                this.homeRepairForm = new FormGroup({});
              }
  homeRepairForm: FormGroup;
  careCircleId;
  userId;
  appliances;
  stateObject;
  readyFlag;
  key: string;

  imageList = [];

  ngOnInit() {
  }

  addImage() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 4,
    };
    this.imagePicker.getPictures(options).then(
      (results) => {
        console.log(results);
        for (let i = 0; i < results.length; i++) {
          this.imageList.push(results[i]);
        }
      },
      (err) => {}
    );
  }
  removeImg(i) {
    console.log('*', i);
    this.imageList.splice(i, 1);
  }

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject[this.key] = this.homeRepairForm.value;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.navCtrl.back();
    });
  }
  generateClick(item: any) {
    this.homeRepairForm.controls[item].setValue(!this.homeRepairForm.controls[item].value);
  }
  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    this.key = 'HOME_REPAIR';
    this.homeRepairForm = new FormGroup({});

    this.assessmentService.getAssessmentStateObject().then((data) => {
      // first time load
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (this.stateObject != null && this.stateObject[this.key] != null){
        Object.keys(this.stateObject[this.key]).forEach((element: any) => {
          this.homeRepairForm.addControl(element, new FormControl(this.stateObject[this.key][element]));
        });
      }
      else{
        // data is not present
        this.homeRepairForm.addControl('instructions', new FormControl());
        data.assessmentConfiguration.CARE_NEEDS[this.key].appliances.forEach(element => {
          this.homeRepairForm.addControl(element, new FormControl());
        });
      }
      this.appliances = data.assessmentConfiguration.CARE_NEEDS[this.key].appliances;
      this.readyFlag = true;
    });
  }

}
