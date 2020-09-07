import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from '../http.service';
import { CreatingcareService } from './creatingcare/creatingcare.service';
import { AssessmentServiceService } from './assessment/assessment-service.service';
import { ConfigCareServiceService } from './configcare/config-care-service.service';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private data: any = {};
  private signupData: any;
  constructor(
    private storage: Storage,
    private apiService: ApiService,
    private creatingCareService: CreatingcareService,
    private assessmentService: AssessmentServiceService,
    private configCareService: ConfigCareServiceService) {
    this.storage.get('user').then((userData) => {
      this.data.userData = userData;
    });
  }
  getDaysList(){
    return [
      {
        name: 's',
        value: 0,
      },
      {
        name: 'm',
        value: 1,
      },
      {
        name: 't',
        value: 2,
      },
      {
        name: 'w',
        value: 3,
      },
      {
        name: 't',
        value: 4,
      },
      {
        name: 'f',
        value: 5,
      },
      {
        name: 's',
        value: 6,
      },
    ];
  }
  setLastVisitedPage(pageName){
    this.storage.set('lastVisited', pageName);
  }
  async getlastVisitedPage(){
    const lastVisited = await this.storage.get('lastVisited');
    return lastVisited;
  }
  setUserInfo(userData: any){
    this.data.userData = userData;
    this.storage.set('user', userData);
  }
  async getUserInfo(){
    if (this.data.userData){
      return this.data.userData;
    }
    else{
      this.data.userData = await this.storage.get('user');
      return this.data.userData;
    }
  }
  setDeviceInfo(data){
    this.storage.set('deviceData', data);
  }
  async getDeviceInfo(){
    return await this.storage.get('deviceData');
  }
  setSignupData(data){
    this.signupData = data;
    this.storage.set('signupData', data);
  }
  async getSignupData(){
    if (!this.signupData){
      this.signupData = await this.storage.get('signupData');
    }
    return this.signupData;
  }
  async getInitialData(){
    const userData = await this.getUserInfo();
    const careCircleData: any = await this.apiService.get('careCircle', {userId: userData.userId}, false);
    if (careCircleData.length){
      this.creatingCareService.setAvailableCareCircleDetails(careCircleData);
      this.creatingCareService.setCareCircleDetails(careCircleData[0]);
      this.creatingCareService.setCareCircleId(careCircleData[0].careCircleId);
      this.creatingCareService.setCareCircleName(careCircleData[0].careCircleName);
      const assessmentData = await this.apiService.get('assessment', {careCircleId: careCircleData[0].careCircleId, userId: userData.userId }, false);
      this.assessmentService.setAssessmentStateObject(assessmentData);
      this.configCareService.getConfigCareDetails(true, false);
      }
  }
}
