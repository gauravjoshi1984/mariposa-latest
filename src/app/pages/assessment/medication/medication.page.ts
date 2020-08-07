import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

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
  toggleQuestions = [];
  formData: any = {};
  validForm = false;
  constructor(private navCtrl: NavController,
              private assessmentService: AssessmentServiceService,
              private dataService: DataserviceService, ) { }

  

  medicationlist = [
    {
      name:"perafivir",
      type:"capsule",
    },
    {
      name:"peracitomal",
      type:"tablet",
    },
  ]

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
      console.log(this.formData);
      this.validForm = true;
    }
  }
  changeToggle(key, ev: any) {
    this.formData[key] = ev;
  }

  generateClick(key: any) {
    this.formData[key] = !this.formData[key];
  }

}
