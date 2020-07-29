import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http.service';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-useofelectronics',
  templateUrl: './useofelectronics.page.html',
  styleUrls: ['./useofelectronics.page.scss'],
})
export class UseofelectronicsPage implements OnInit {
  stateObject: any = {};
  equipmentList: any = [];
  careCircleId;
  userId;
  readyFlag = false;
  formData: any = {

  };
  constructor(private router: Router,
              private apiService: ApiService,
              private location: Location,
              private navCtrl: NavController,
              private assessmentService: AssessmentServiceService,
              private dataService: DataserviceService) { }

  ngOnInit() {
  }
  addImage() {
    console.log('X');
  }
  changeToggle(formItem: any , ev: any) {
    this.formData[formItem] = ev;
  }
  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.ELECTRONICS = this.formData;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.router.navigate(['/assessment/assessmentbar']);
    });
  }

  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'ELECTRONICS';

    this.assessmentService.getAssessmentStateObject().then((data) => {
      // first time load
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        this.formData = data.assessmentValues.CARE_NEEDS[key];
      }
      else{
        // do nothing
        this.formData.instructions = null;
        data.assessmentConfiguration.CARE_NEEDS[key].yn_questions.forEach(element => {
          this.formData[element.label] = element.answer;
        });
      }
      data.assessmentConfiguration.CARE_NEEDS[key].yn_questions.forEach(element => {
        this.equipmentList.push(element.label);
      });
      console.log(this.equipmentList);
      this.readyFlag = true;
    });
  }

}
