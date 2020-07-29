import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-companionship',
  templateUrl: './companionship.page.html',
  styleUrls: ['./companionship.page.scss'],
})
export class CompanionshipPage implements OnInit {
  companionshipForm: FormGroup;
  careCircleId;
  userId;
  favItemList;
  stateObject;
  constructor(private dataService: DataserviceService,
              private assessmentService: AssessmentServiceService,
              private navCtrl: NavController,
              private imagePicker: ImagePicker,
              private formBuilder: FormBuilder) {
    this.companionshipForm = this.formBuilder.group({ });
   }

   imageList = [];

  ngOnInit() {
  }


  

  addImage() {
    let options: ImagePickerOptions = {
      maximumImagesCount: 4,
    };
    this.imagePicker.getPictures(options).then(
      (results) => {
        console.log(results);
        for (var i = 0; i < results.length; i++) {
          this.imageList.push(results[i]);
        }
      },
      (err) => {}
    );
  }
  removeImg(i) {
    console.log("*", i);
    this.imageList.splice(i, 1);
  }





  generateClick(item: any) {
    this.companionshipForm.controls[item].setValue(!this.companionshipForm.controls[item].value);
  }

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.COMPANIONSHIP = this.companionshipForm.value;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.navCtrl.navigateForward(['/assessment/assessmentbar']);
    });
  }

  

  async ionViewWillEnter(){
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'COMPANIONSHIP';
    this.companionshipForm = new FormGroup({});

    this.assessmentService.getAssessmentStateObject().then((data) => {
      console.log(data);

      // first time load
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        // data is present
        Object.keys(this.stateObject[key]).forEach((element: any) => {
          this.companionshipForm.addControl(element, new FormControl(this.stateObject[key][element]));
        });
      }
      else{
        // data is not present
        this.companionshipForm.addControl('instructions', new FormControl());
        data.assessmentConfiguration.CARE_NEEDS[key].fav_activities.forEach(element => {
          this.companionshipForm.addControl(element, new FormControl());
        });
      }
      this.favItemList = data.assessmentConfiguration.CARE_NEEDS[key].fav_activities;
    });
  }
}
