import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http.service';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {
  constructor(
    private assessmentService: AssessmentServiceService,
    private dataService: DataserviceService,
    private navCtrl: NavController
    ) {
  }
  mealtype = ['breakfast', 'lunch', 'dinner', 'snack'];
  newMeal: any;
  stateObject: any = {};
  careCircleId;
  userId;
  readyFlag;
  imageList = [];
  validForm = false;
  sharedKey = 'meal';
  shoppingAssistance = [];
   selectData = [
    {
      value: 'yes',
      name: 'Yes',
    },
    {
      value: 'no',
      name: 'NO',
    },
  ];
  formData: any = {
    assistance: {},
    specialDiet: false,
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: []
  };

  addMore(arrayName){
      this.formData[arrayName].push({name: ''});
      this.validForm = true;
  }

  ngOnInit() {
  }

  addDate(){}

  generateClick(key: any) {
    this.formData.assistance[key] = !this.formData[key];
  }

  changeToggle(formItem: any , ev: any) {
    this.formData[formItem] = ev;
  }

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.COOKING = this.formData;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });
  }

  async ionViewWillEnter(){
      this.readyFlag = false;
      this.careCircleId = await this.assessmentService.getCareCircleId();
      this.userId = await this.dataService.getUserInfo();
      this.userId = this.userId.userId;
      const key = 'COOKING';
      const data = await this.assessmentService.getAssessmentStateObject();
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (this.stateObject != null && this.stateObject[key] != null && 'assistance' in this.stateObject[key]){
        this.formData = this.stateObject[key];
        this.validForm = true;
      }
      const newMeal = this.assessmentService.getAssessmentShared(this.sharedKey);
      if (newMeal){
        this.formData[newMeal.type].push(newMeal.obj);
        this.assessmentService.setAssessmentShared(null, null, this.sharedKey);
      }
      const mealEdit = this.assessmentService.getAssessmentEditShared(this.sharedKey);
      if (mealEdit){
        this.formData[mealEdit.type][mealEdit.index] = mealEdit.obj;
        this.assessmentService.setAssessmentEditShared(null, null, this.sharedKey);
      }
      // this.mealtype.forEach(type => {
      //   this.recipebook.push(...this.formData[type]);
      // });
      this.shoppingAssistance = data.assessmentConfiguration.CARE_NEEDS[key].assistance;
      this.readyFlag = true;
  }
  async addMeal(){
    const data = await this.assessmentService.getAssessmentStateObject();
    data.assessmentValues.CARE_NEEDS.COOKING = this.formData;
    this.assessmentService.setAssessmentStateObject(data);
    this.navCtrl.navigateForward(['/assessment/addmeal']);
  }
  async editMeal(meal, mealType, index){
    await this.assessmentService.setAssessmentEditShared(meal, mealType.toLowerCase(), this.sharedKey, index);
    this.navCtrl.navigateForward(['/assessment/addmeal']);
  }
}
