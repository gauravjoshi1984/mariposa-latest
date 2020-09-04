import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataserviceService } from '../../dataservice.service';
import { AssessmentServiceService } from '../assessment-service.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { ApiService } from 'src/app/http.service';

@Component({
  selector: 'app-previewassessment',
  templateUrl: './previewassessment.page.html',
  styleUrls: ['./previewassessment.page.scss'],
})
export class PreviewassessmentPage implements OnInit {
  assessmentData: any = {};
  careCircleId: string;
  title: string;
  dataReady = false;
  constructor(
    private navCtrl: NavController,
    private dataService: DataserviceService,
    private assessmentService: AssessmentServiceService,
    private _creatingCareService: CreatingcareService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }
  changeToggle(ev: any) {
    console.log(ev);
  }
  objectKeys(obj){
    return Object.keys(obj).filter(key => key !== 'instructions');
  }
  async ionViewWillEnter(){
    // this.dataService.setLastVisitedPage('/assessment/assessmentbar');
    this.careCircleId = await this.assessmentService.getCareCircleId();
    const careCircleName = await this._creatingCareService.getCareCircleName();
    this.title = `Preview ${careCircleName}'s Assessment`;
    const userData = await this.dataService.getUserInfo();
    const userId = userData.userId;
    this.assessmentData = await this.assessmentService.getAssessmentStateObject();
    this.dataReady = true;
  }
  getPropertyValues(obj){
    const valueArr = [];
    Object.keys(obj).forEach(key => {
      if (key !== 'instructions' && obj[key]){
        valueArr.push(key);
      }
    });
    return valueArr.join(', ');
  }
  getpropertyHour(value){
    if (value){
      let hour: any = new Date(value).getHours();
      hour = `${hour % 12} ${hour >= 12 ? 'PM' : 'AM'}`;
      return hour;
    }
  }
  getpropertyHours(times){
      const hours = [];
      times.forEach(value => {
        hours.push(this.getpropertyHour(value.time));
      });
      return hours.join(', ');
  }
  getArrayValues(arr, key){
    if (arr){
      return arr.map(val => val[key]).join(', ');
    }
    else{
      return '';
    }
  }
  getDob(day, month, year){
    return `${new Date(day).getDate()}/${new Date(month).getMonth()}/${new Date(year).getFullYear()}`;
  }
  getKeys(obj){
    const data = [];
    Object.keys(obj).forEach(key => {
      if (obj[key]){
        data.push(key);
      }
    });
    return data;
  }
}
