import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/http.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentServiceService {

  constructor(private storage: Storage, private apiService: ApiService) { }
  assesmentMeal = null;
  editMeal = null;
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
    await this.apiService.post('updateAssessment/?careCircleId=' + careCircleId + '&assessmentKey=' + key + '&userId=' + userId, objectToSave).then( async (response) => {
      const assessmentObject = await this.getAssessmentStateObject();
      assessmentObject.assessmentValues[key] = objectToSave;
      await this.setAssessmentStateObject(assessmentObject);
    });
  }
  setAssessmentMeal(meal, mealType){
    if (meal){
      this.assesmentMeal = {mealType, meal};
    }else{
      this.assesmentMeal = null;
    }
  }
  setAssessmentMealEdit(meal, mealType, index = 0){
    if (meal){
      this.editMeal = {index, mealType, meal};
    }else{
      this.editMeal = null;
    }
  }
  getAssessmentMeal(){
    return this.assesmentMeal;
  }
  getAssessmentEditMeal(){
    return this.editMeal;
  }
}
