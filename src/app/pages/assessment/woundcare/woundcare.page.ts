import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";

@Component({
  selector: 'app-woundcare',
  templateUrl: './woundcare.page.html',
  styleUrls: ['./woundcare.page.scss'],
})
export class WoundcarePage implements OnInit {

  woundForm: FormGroup;
  careCircleId;
  userId;
  stateObject: any;
  key: string;
  createdForm = false;
  constructor(private dataService: DataserviceService,private imagePicker: ImagePicker, private navCtrl: NavController, private assessmentService: AssessmentServiceService, private router: Router) { }
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
    this.key = 'WOUND_CARE';
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    this.woundForm = new FormGroup({});
    this.assessmentService.getAssessmentStateObject().then((data) => {
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[this.key] != null){
        // data is present
        Object.keys(data.assessmentValues.CARE_NEEDS[this.key]).forEach((element: any) => {
          this.woundForm.addControl(element, new FormControl(data.assessmentValues.CARE_NEEDS[this.key][element]));
        });
      }
      else{
        this.woundForm.addControl('instructions', new FormControl());
      }
      this.createdForm = true;
    });
  }
  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject[this.key] = this.woundForm.value;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.navCtrl.navigateForward(['/assessment/assessmentbar']);
    });
  }
  
}
