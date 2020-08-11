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

  ionViewWillEnter(){
    const selectedMeal = this.assessmentService.getAssessmentEditMeal();
    if (selectedMeal){
      this.editFlag = true;
      const {mealType, name, recepie} = selectedMeal.meal;
      this.imageList = selectedMeal.meal.imageList ? selectedMeal.meal.imageList : [];
      this.addMealForm.setValue({mealType, name, recepie});
      this.assessmentService.setAssessmentMealEdit(null, null, null);
    }
  }
  async addmeal(){
    const mealType = this.addMealForm.controls.mealType.value.toLowerCase();
    // const data = {...this.addMealForm.value, imageList: this.imageList};
    const data = {...this.addMealForm.value};
    if (this.editFlag){
      await this.assessmentService.setAssessmentMealEdit(data, mealType);
    }
    else{
      await this.assessmentService.setAssessmentMeal(data, mealType);
    }
    this.navCtrl.back();
  }
}
