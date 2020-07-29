import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataserviceService } from '../../dataservice.service';
import { Router } from '@angular/router';
import { AssessmentServiceService } from '../assessment-service.service';
import { NavController } from '@ionic/angular';
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";

@Component({
  selector: 'app-toileting',
  templateUrl: './toileting.page.html',
  styleUrls: ['./toileting.page.scss'],
})
export class ToiletingPage implements OnInit {
  toiletingForm: FormGroup;
  key;
  careCircleId;
  userId;
  formCreated = false;
  stateObject;
  constructor(private dataService: DataserviceService,
              private router: Router,
              private navCtrl: NavController,
              private imagePicker: ImagePicker,
              private assessmentService: AssessmentServiceService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  imageList = [];

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





  async ionViewWillEnter(){
    this.key = 'TOILETING';
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    this.toiletingForm = new FormGroup({});

    this.assessmentService.getAssessmentStateObject().then((data) => {
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[this.key] != null){
        // data is present
        Object.keys(data.assessmentValues.CARE_NEEDS[this.key]).forEach((element: any) => {
          this.toiletingForm.addControl(element, new FormControl(this.stateObject[this.key][element]));
        });
      }
      else{
        // data is not present
        this.toiletingForm.addControl('instructions', new FormControl());
        this.toiletingForm.addControl('Toilet', new FormControl(false));
        this.toiletingForm.addControl('Commode', new FormControl(false));
      }
      this.formCreated = true ;
    });
  }
  changeToggle(ev: any) {
    console.log(ev);
  }
  
  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject[this.key] = this.toiletingForm.value;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.navCtrl.navigateForward(['/assessment/assessmentbar']);
    });
  }

}
