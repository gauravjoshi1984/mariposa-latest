import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {
  exerciseForm: FormGroup;
  exerciseData: any = {};
  careCircleId;
  userId;
  therapyTypeList;
  stateObject;
  sharedKey = 'exercise';
  readyFlag;
  constructor(private dataService: DataserviceService,
              private navCtrl: NavController,
              private assessmentService: AssessmentServiceService,
              private formBuilder: FormBuilder) {
      this.exerciseForm = this.formBuilder.group({ });
    }


    imageList = [];

  ngOnInit() {
  }

  save(){
    // if (this.stateObject == null){
    //   this.stateObject = {};
    // }
    // this.stateObject.EXERCISE = {...this.exerciseForm.value, imageList: this.imageList};
    // this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
    //   console.log(response);
    //   // this.navCtrl.navigateBack(['/assessment/assessmentbar']);
    //   this.navCtrl.back();
    // });
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.EXERCISE = this.exerciseData;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });

  }

  generateClick(item: any) {
    this.exerciseForm.controls[item].setValue(!this.exerciseForm.controls[item].value);
  }


  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'EXERCISE';
    // this.exerciseForm = new FormGroup({});

    this.assessmentService.getAssessmentStateObject().then((data) => {
      // first time load
      this.stateObject = data.assessmentValues.CARE_NEEDS;

      // if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
      //   Object.keys(data.assessmentValues.CARE_NEEDS[key]).forEach((element: any) => {
      //     this.exerciseForm.addControl(element, new FormControl(data.assessmentValues.CARE_NEEDS[key][element]));
      //   });
      //   this.imageList = this.exerciseForm.controls.imageList ? this.exerciseForm.controls.imageList.value : [];
      // }
      // else{
      //   // data is not present
      //   this.exerciseForm.addControl('instructions', new FormControl());
      //   this.exerciseForm.addControl('imageList', new FormControl([]));
      //   data.assessmentConfiguration.CARE_NEEDS[key].therapy_types.forEach(element => {
      //     this.exerciseForm.addControl(element, new FormControl());
      //   });
      // }
      if (this.stateObject != null && this.stateObject[key] != null){
        this.exerciseData = this.stateObject[key];
      }
      const newExercise = this.assessmentService.getAssessmentShared(this.sharedKey);
      if (newExercise){
        if (!(newExercise.type in this.exerciseData)){
          this.exerciseData[newExercise.type] = [];
        }
        this.exerciseData[newExercise.type].push(newExercise.obj);
        this.assessmentService.setAssessmentShared(null, null, this.sharedKey);
      }
      const exerciseEdit = this.assessmentService.getAssessmentEditShared(this.sharedKey);
      if (exerciseEdit){
        this.exerciseData[exerciseEdit.type][exerciseEdit.index] = exerciseEdit.obj;
        this.assessmentService.setAssessmentEditShared(null, null, this.sharedKey);
      }
      this.therapyTypeList = data.assessmentConfiguration.CARE_NEEDS[key].therapy_types;
      this.readyFlag = true;
    });
  }
  async editExercise(item, type, index){
    await this.assessmentService.setAssessmentEditShared(item, type, this.sharedKey, index);
    this.navCtrl.navigateForward(['/assessment/addexercise']);
  }
  async addExercise(){
    const data = await this.assessmentService.getAssessmentStateObject();
    data.assessmentValues.CARE_NEEDS.EXERCISE = this.exerciseData;
    this.assessmentService.setAssessmentStateObject(data);
    this.navCtrl.navigateForward(['/assessment/addexercise']);
  }
}
