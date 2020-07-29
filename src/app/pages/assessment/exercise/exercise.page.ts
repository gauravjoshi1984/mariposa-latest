import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { AssessmentServiceService } from '../assessment-service.service';
import { ApiService } from 'src/app/http.service';
import { Router } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {
  exerciseForm: FormGroup;
  careCircleId;
  userId;
  therapyTypeList;
  stateObject;
  readyFlag;
  constructor(private dataService: DataserviceService,
    private router: Router,
    private apiService: ApiService,
    private location: Location,
    private navCtrl: NavController,
    private imagePicker: ImagePicker,
    private assessmentService: AssessmentServiceService,
    private formBuilder: FormBuilder) {
      this.exerciseForm = this.formBuilder.group({ });
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


  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.EXERCISE = this.exerciseForm.value;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      console.log(response);
      //this.router.navigate(['/assessment/assessmentbar']);
      this.navCtrl.navigateForward(['/assessment/assessmentbar']);
    });

  }

  generateClick(item: any) {
    this.exerciseForm.controls[item].setValue(!this.exerciseForm.controls[item].value)
  }
  

  async ionViewWillEnter(){
    this.readyFlag = false
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'EXERCISE';
    this.exerciseForm = new FormGroup({});

    this.assessmentService.getAssessmentStateObject().then((data) => {
      console.log("came here 33",data)

      // first time load
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        Object.keys(data.assessmentValues.CARE_NEEDS[key]).forEach((element: any) => {
          this.exerciseForm.addControl(element, new FormControl(data.assessmentValues.CARE_NEEDS[key][element]));
        });
      }
      else{
        // data is not present
        this.exerciseForm.addControl('instructions', new FormControl());
        data.assessmentConfiguration.CARE_NEEDS[key].therapy_types.forEach(element => {
          this.exerciseForm.addControl(element, new FormControl());
        });
      }
      this.therapyTypeList = data.assessmentConfiguration.CARE_NEEDS[key].therapy_types;
      this.readyFlag = true
    });
  }
}
