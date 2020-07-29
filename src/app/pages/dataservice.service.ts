import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private data: any = {};
  constructor(private storage: Storage) {
    this.storage.get('user').then((userData) => {
      this.data.userData = userData;
    });
  }
  setLastVisitedPage(pageName){
    this.storage.set('lastVisited', pageName);
  }
  async getlastVisitedPage(){
    const lastVisited = await this.storage.get('lastVisited');
    return lastVisited ? lastVisited : '/admin-sign-in';
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
}
