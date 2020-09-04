import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private data: any = {};
  private signupData: any;
  constructor(private storage: Storage) {
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
  setAuthTokens(data){
    this.storage.set('authTokens', data);
  }
  async getAuthTokens(){
    return await this.storage.get('authTokens');
  }
  getInitialData(){

  }
}
