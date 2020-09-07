import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private storage: Storage) { }
  private data: any = {};
  setAuthTokens(data){
    this.storage.set('authTokens', data);
  }
  async getAuthTokens(){
    return await this.storage.get('authTokens');
  }
  setUserInfo(userData: any){
    this.data.userData = userData;
    this.storage.set('user', userData);
  }
}
