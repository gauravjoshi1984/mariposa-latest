import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-addmeal',
  templateUrl: './addmeal.page.html',
  styleUrls: ['./addmeal.page.scss'],
})
export class AddmealPage implements OnInit {
  addMealForm: FormGroup;
  editFlag = false;
  key = 'meal';
  category = 'COOKING';
  stateObject;
  careCircleId;
  userId;
  formData = {
    assistance: {},
    specialDiet: false,
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: []
  };
  constructor(private navCtrl: NavController,
              private formBuilder: FormBuilder,
              private assessmentService: AssessmentServiceService,
              private dataService: DataserviceService) {
    this.addMealForm = this.formBuilder.group({
      mealType: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      recepie: new FormControl('')
    });
  }
  mealtype = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
  imageList = [];
  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const selectedMeal = this.assessmentService.getAssessmentEditShared(this.key);
    if (selectedMeal){
      this.editFlag = true;
      const {mealType, name, recepie} = selectedMeal.obj;
      this.imageList = selectedMeal.obj.imageList ? selectedMeal.obj.imageList : [];
      this.addMealForm.setValue({mealType, name, recepie});
    }
    const data = await this.assessmentService.getAssessmentStateObject();
    if (data.assessmentValues.CARE_NEEDS){
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (this.stateObject != null && this.stateObject[this.category] != null && 'assistance' in this.stateObject[this.category]){
        this.formData = this.stateObject[this.category];
      }
    }
  }
  async addmeal(){
    const mealType = this.addMealForm.controls.mealType.value.toLowerCase();
    const data = {...this.addMealForm.value, imageList: this.imageList};
    // const data = {...this.addMealForm.value};
    if (this.editFlag){
      const selectedMeal = this.assessmentService.getAssessmentEditShared(this.key);
      await this.assessmentService.setAssessmentEditShared(data, mealType, this.key, selectedMeal.index);
    }
    else{
      if (!(mealType in this.formData)){
        this.formData[mealType] = [];
      }
      this.formData[mealType].push(data);
      this.stateObject[this.category] = this.formData;
      this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
        this.navCtrl.back();
      });
      // await this.assessmentService.setAssessmentShared(data, mealType, this.key);
    }
  }
}
