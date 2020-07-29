import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataserviceService } from '../../dataservice.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http.service';
import { Location } from '@angular/common';
import { AssessmentServiceService } from '../assessment-service.service';
import {
  ImagePicker,
  ImagePickerOptions,
} from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-grooming',
  templateUrl: './grooming.page.html',
  styleUrls: ['./grooming.page.scss'],
})
export class GroomingPage implements OnInit {
  constructor(private dataService: DataserviceService,
              private router: Router,
              private apiService: ApiService,
              private location: Location,
              private imagePicker: ImagePicker,
              private navCtrl: NavController,
              private assessmentService: AssessmentServiceService) { }

  formData = {instructions:''};
  careCircleId;
  userId;
  stateObject;
  readyFlag;

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

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.GROOMING = this.formData;
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
    const key = 'GROOMING';

    this.assessmentService.getAssessmentStateObject().then((data) => {
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
