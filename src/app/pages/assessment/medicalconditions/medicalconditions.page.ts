import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-medicalconditions',
  templateUrl: './medicalconditions.page.html',
  styleUrls: ['./medicalconditions.page.scss'],
})
export class MedicalconditionsPage implements OnInit {

  stateObject: any = {};
  careCircleId;
  userId;
  key: string;
  medicalForm: any = {otherFactors: {}, healthProviderContact: {}};
  otherFactors: any = {};
  toggleQuestions: any = [];
  radioQuestions: any = [];
  checkboxQuestions: any = [];
  formReady = false;
  imageList = [];

  constructor(
    private navCtrl: NavController,
    private assessmentService: AssessmentServiceService,
    private dataService: DataserviceService) {
    }

  ngOnInit() {
  }
  objectKeys(obj){
    return Object.keys(obj).filter(key => obj[key]);
  }
  save(){
    this.stateObject = this.medicalForm;
    this.assessmentService.saveAssessmentState(this.careCircleId, this.key, this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.navCtrl.back();
    });
  }

  generateClick(key, option) {
    this.medicalForm[key][option] = !this.medicalForm[key][option];
    if (key === 'healthProviders' && this.medicalForm[key][option]){
      this.medicalForm.healthProviderContact[option] = {};
    }
  }

  async ionViewWillEnter(){
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    this.key = 'MEDICAL_PSYCHIATRIC';
    const data = await this.assessmentService.getAssessmentStateObject();
    this.otherFactors = data.assessmentConfiguration[this.key].other_factors;
    this.toggleQuestions = data.assessmentConfiguration[this.key].yn_questions;
    this.radioQuestions = data.assessmentConfiguration[this.key].radiobutton_questions;
    this.checkboxQuestions = data.assessmentConfiguration[this.key].checkbox_questions;
    this.stateObject = data.assessmentValues[this.key];
    if (this.stateObject != null){
      this.medicalForm = this.stateObject;
      if (!this.medicalForm.healthProviderContact){
        this.medicalForm.healthProviderContact = {};
        Object.keys(this.medicalForm.healthProviders).forEach(item => {
          this.medicalForm.healthProviderContact[item] = {};
        });
      }
    }else{
      this.checkboxQuestions.forEach(question => {
        this.medicalForm[question.key] = {};
      });
      this.radioQuestions.forEach(question => {
        this.medicalForm[question.key] = null;
      });
      this.toggleQuestions.forEach(question => {
        this.medicalForm[question.key] = null;
      });
    }
    this.formReady = true;
  }

  toggleRadio(key, value) {
    this.medicalForm[key] = value;
  }

}
