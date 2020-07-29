import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/http.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentServiceService {

  constructor(private storage: Storage, private apiService: ApiService) { }

  async getCareCircleId(){
    const careCircleDetails = await this.storage.get('careCircleDetails');
    return careCircleDetails.careCircleId;
  }

  async setAssessmentStateObject(assessmentState) {
    await this.storage.set('assessmentState', assessmentState);
  }

  async getAssessmentStateObject(){
    const assessmentState = await this.storage.get('assessmentState');
    return assessmentState;
  }
  async saveAssessmentState(careCircleId, key, userId, objectToSave){
    await this.apiService.post('updateAssessment/?careCircleId=' + careCircleId + '&assessmentKey=' + key + '&userId=' + userId, objectToSave).then( async (response) => {
      const assessmentObject = await this.getAssessmentStateObject();
      assessmentObject.assessmentValues[key] = objectToSave;
      await this.setAssessmentStateObject(assessmentObject)
    });
  }

}
