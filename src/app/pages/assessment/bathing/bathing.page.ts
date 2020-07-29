import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";

@Component({
  selector: 'app-bathing',
  templateUrl: './bathing.page.html',
  styleUrls: ['./bathing.page.scss'],
})
export class BathingPage implements OnInit {
  bathingForm: FormGroup;
  careCircleId;
  userId;
  stateObject;
  readyFlag = false;
  constructor(private dataService: DataserviceService,
    private router: Router,
    private apiService: ApiService,
    private imagePicker: ImagePicker,
    private location: Location,
    private navCtrl: NavController,
    private assessmentService: AssessmentServiceService,
    private formBuilder: FormBuilder) { 
      this.bathingForm = new FormGroup({})
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
    this.stateObject.BATHING = this.bathingForm.value;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      console.log("done2");
      this.navCtrl.navigateForward(['/assessment/assessmentbar']);
    });

  }

  async ionViewWillEnter(){
    this.readyFlag = false
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'BATHING';
    this.bathingForm = new FormGroup({});

    this.assessmentService.getAssessmentStateObject().then((data) => {

      // first time load
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        // data is present
        Object.keys(data.assessmentValues.CARE_NEEDS[key]).forEach((element: any) => {
          this.bathingForm.addControl(element, new FormControl(data.assessmentValues.CARE_NEEDS[key][element]));
        });
      }
      else{
        // data is not present
        this.bathingForm.addControl('instructions', new FormControl());
      }
      this.readyFlag = true
    });
  }
}
