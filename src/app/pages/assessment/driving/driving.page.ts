import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http.service';
import { Location } from '@angular/common';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";

@Component({
  selector: 'app-driving',
  templateUrl: './driving.page.html',
  styleUrls: ['./driving.page.scss'],
})
export class DrivingPage implements OnInit {
  constructor(private router: Router,
              private apiService: ApiService,
              private location: Location,
              private imagePicker: ImagePicker,
              private assessmentService: AssessmentServiceService,
              private dataService: DataserviceService,
              private navCtrl: NavController) { }
  stateObject: any = {};
  careCircleId;
  userId;
  readyFlag;
  formData: any = {
    abilityToDrive: null,
    instructions: null
  };


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


  changeToggle(formItem: any , ev: any) {
    console.log(ev);
    this.formData[formItem] = ev;
  }


  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.DRIVING = this.formData;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.navCtrl.navigateForward(['/assessment/assessmentbar']);
    });
    console.log('called Save', this.formData);
  }
  
  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'DRIVING';

    this.assessmentService.getAssessmentStateObject().then((data) => {
      // first time load
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        this.formData = data.assessmentValues.CARE_NEEDS[key];
      }
      else{
        // do nothing
      }
      this.readyFlag = true;
    });
  }

}
