import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http.service';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';
import { Location } from '@angular/common';
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";

@Component({
  selector: 'app-dressing',
  templateUrl: './dressing.page.html',
  styleUrls: ['./dressing.page.scss'],
})
export class DressingPage implements OnInit {


  formData: any = {
    dressingPreferences : [''],
    instructions: ''
  };
  careCircleId;
  userId;
  stateObject;
  readyFlag;
  constructor(private router: Router,
              private apiService: ApiService,
              private location: Location,
              private assessmentService: AssessmentServiceService,
              private imagePicker: ImagePicker,
              private dataService: DataserviceService,
              private navCtrl: NavController) { }

  addMore(arrayName){
    this.formData[arrayName].push('');
    console.log('form', this.formData);
  }
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


  

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.DRESSING = this.formData;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.navCtrl.navigateForward(['/assessment/assessmentbar']);
    });
  }
  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'DRESSING';

    this.assessmentService.getAssessmentStateObject().then((data) => {
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        this.formData = data.assessmentValues.CARE_NEEDS[key];
      }
      else{
        // data is not present
        // do nothing
      }
      this.readyFlag = true;
    });
  }

}
