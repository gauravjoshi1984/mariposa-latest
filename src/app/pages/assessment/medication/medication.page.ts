import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.page.html',
  styleUrls: ['./medication.page.scss'],
})
export class MedicationPage implements OnInit {
  stateObject: any = {};
  careCircleId;
  userId;
  readyFlag;
  imageList = [];
  allergies = [];
  allergiesList = [];
  toggleQuestions = [];
  formData: any = {};
  validForm = false;
  sharedKey = 'medication';
  constructor(
    private navCtrl: NavController,
    private assessmentService: AssessmentServiceService,
    private dataService: DataserviceService) { }

  medicationlist = [
    {
      name: 'perafivir',
      type: 'capsule',
    },
    {
      name: 'peracitomal',
      type: 'tablet',
    },
  ];

  ngOnInit() {
  }

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    // this.formData.imageList = this.imageList;
    this.stateObject.MEDICATION = this.formData;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });
  }
  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'MEDICATION';
    const data = await this.assessmentService.getAssessmentStateObject();
    this.stateObject = data.assessmentValues.CARE_NEEDS;
    this.allergies = data.assessmentConfiguration.CARE_NEEDS[key].allergies;
    this.toggleQuestions = data.assessmentConfiguration.CARE_NEEDS[key].yn_questions;
    if (this.stateObject != null && this.stateObject[key] != null){
      this.formData = this.stateObject[key];
      this.validForm = true;
    }
    const newMedication = this.assessmentService.getAssessmentShared(this.sharedKey);
    if (newMedication){
      if (!this.formData[newMedication.type]){
        this.formData[newMedication.type] = [];
      }
      this.formData[newMedication.type].push(newMedication.obj);
      this.assessmentService.setAssessmentShared(null, null, this.sharedKey);
    }
    const editMedication = this.assessmentService.getAssessmentEditShared(this.sharedKey);
    if (editMedication){
      this.formData[editMedication.type][editMedication.index] = editMedication.obj;
      this.assessmentService.setAssessmentEditShared(null, null, this.sharedKey);
    }
    data.assessmentValues.CARE_NEEDS[key] = this.formData;
    this.assessmentService.setAssessmentStateObject(data);
  }
  changeToggle(key, ev: any) {
    this.formData[key] = ev;
  }
  async editMedication(item, type, index){
    await this.assessmentService.setAssessmentEditShared(item, type.toLowerCase(), this.sharedKey, index);
    this.navCtrl.navigateForward(['/assessment/addMedication']);
  }
  async editAllergy(item, type, index){
    await this.assessmentService.setAssessmentEditShared(item, type.toLowerCase(), this.sharedKey, index);
    this.navCtrl.navigateForward(['/assessment/addallergy']);
  }
  generateClick(key: any) {
    this.formData[key] = !this.formData[key];
  }

}
