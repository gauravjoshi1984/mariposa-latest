import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-addexercise',
  templateUrl: './addexercise.page.html',
  styleUrls: ['./addexercise.page.scss'],
})
export class AddexercisePage implements OnInit {
  addExerciseForm: FormGroup;
  editFlag = false;
  key = 'exercise';
  category = 'EXERCISE';
  stateObject;
  formData: any = {};
  careCircleId;
  userId;
  constructor(private navCtrl: NavController,
              private formBuilder: FormBuilder,
              private assessmentService: AssessmentServiceService,
              private dataService: DataserviceService) {
    this.addExerciseForm = this.formBuilder.group({
      type: new FormControl('', [Validators.required]),
      instructions: new FormControl('')
    });
  }
  therapyList = [];
  imageList = [];
  ngOnInit() {
  }

  async ionViewWillEnter(){
    const stateObject = await this.assessmentService.getAssessmentStateObject();
    this.therapyList = stateObject.assessmentConfiguration.CARE_NEEDS.EXERCISE.therapy_types;
    const selectedExercise = this.assessmentService.getAssessmentEditShared(this.key);
    if (selectedExercise){
      this.editFlag = true;
      const {type, instructions} = selectedExercise.obj;
      this.imageList = selectedExercise.obj.imageList ? selectedExercise.obj.imageList : [];
      this.addExerciseForm.setValue({type, instructions});
    }
    const data = await this.assessmentService.getAssessmentStateObject();
    if (data.assessmentValues.CARE_NEEDS){
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (this.stateObject != null && this.stateObject[this.category] != null){
        this.formData = this.stateObject[this.category];
      }
    }
  }
  async addExercise(){
    const type = this.addExerciseForm.controls.type.value;
    const data = {...this.addExerciseForm.value, imageList: this.imageList};
    // const data = {...this.addMealForm.value};
    if (this.editFlag){
      const selectedExercise = this.assessmentService.getAssessmentEditShared(this.key);
      await this.assessmentService.setAssessmentEditShared(data, type, this.key, selectedExercise.index);
    }
    else{
      if (!(type in this.formData)){
        this.formData[type] = [];
      }
      this.formData[type].push(data);
      this.stateObject[this.category] = this.formData;
      this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
        this.navCtrl.back();
      });
      // await this.assessmentService.setAssessmentShared(data, type, this.key);
    }
  }

}
