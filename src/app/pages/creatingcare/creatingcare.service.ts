import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CreatingcareService {
  data: any = {};
  constructor(private storage: Storage) { }
  setCareCircleName(careCircleName){
    this.data.careCircleName = careCircleName;
    this.storage.set('careCircleName', careCircleName);
  }
  async getCareCircleName(){
    if (!this.data.careCircleName){
      this.data.careCircleName = await this.storage.get('careCircleName');
    }
    return this.data.careCircleName;
  }
  setCareCircleId(careCircleId){
    this.data.careCircleId = careCircleId;
    this.storage.set('careCircleId', careCircleId);
  }
  async getCareCircleID(){
    if (!this.data.careCircleId){
      this.data.careCircleId = await this.storage.get('careCircleId');
    }
    return this.data.careCircleId;
  }
  setAvailableCareCircleDetails(careCircleList){
    this.data.careCircleList = careCircleList;
    this.storage.set('careCircleList', careCircleList);
  }
  async getAvailableCareCircleDetails(){
    if (!this.data.careCircleList){
      this.data.careCircleList = await this.storage.get('careCircleList');
    }
    return this.data.careCircleList;
  }
  setCareCircleDetails(careCircleDetails){
    this.data.careCircleDetails = careCircleDetails;
    this.storage.set('careCircleDetails', careCircleDetails);
  }
  getCareCircleDetails(){
    let careCircleObj = null;
    if (this.data.careCircleList != null){
      this.data.careCircleList.forEach(element => {
        if (element.careCircleId === this.data.careCircleId){
          careCircleObj = element;
        }
      });
    }
    return careCircleObj;
  }
}
