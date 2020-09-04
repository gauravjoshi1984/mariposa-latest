import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/http.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentServiceService {

  constructor(private storage: Storage, private apiService: ApiService) { }
  newSharedData = {};
  editSharedData = {};
  async getCareCircleId(){
    const careCircleDetails = await this.storage.get('careCircleDetails');
    return careCircleDetails.careCircleId;
  }
  async getCareCircleName(){
    const careCircleDetails = await this.storage.get('careCircleDetails');
    return careCircleDetails.careCircleName;
  }
  async setAssessmentStateObject(assessmentState) {
    await this.storage.set('assessmentState', assessmentState);
  }

  async getAssessmentStateObject(){
    const assessmentState = await this.storage.get('assessmentState');
    return assessmentState;
  }
  async saveAssessmentState(careCircleId, key, userId, objectToSave){
    await this.apiService.post('assessment/?careCircleId=' + careCircleId + '&assessmentKey=' + key + '&userId=' + userId, objectToSave).then( async (response) => {
      const assessmentObject = await this.getAssessmentStateObject();
      assessmentObject.assessmentValues[key] = objectToSave;
      await this.setAssessmentStateObject(assessmentObject);
    });
  }
  setAssessmentShared(obj, type, key){
    if (obj){
      this.newSharedData[key] = {type, obj};
    }else{
      this.newSharedData[key] = null;
    }
  }
  setAssessmentEditShared(obj, type, key, index = 0){
    if (obj){
      this.editSharedData[key] = {index, type, obj};
    }else{
      this.editSharedData[key] = null;
    }
  }
  getAssessmentShared(key){
    return this.newSharedData[key];
  }
  getAssessmentEditShared(key){
    return this.editSharedData[key];
  }
}
