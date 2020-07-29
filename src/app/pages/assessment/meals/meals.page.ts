import { Component, OnInit } from '@angular/core';
import {
  ImagePicker,
  ImagePickerOptions,
} from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http.service';
import { AssessmentServiceService } from '../assessment-service.service';
import { Location } from '@angular/common';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {
  stateObject: any = {};
  careCircleId;
  userId;
  readyFlag;
  imageList = [];
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
    shopping: null,
    delivery: null,
    cooking: null,
    preparation: null,
    serving: null,
    specialDiet: null,
    breakfast: [''],
    lunch: [''],
    dinner: [''],
    snack: [''],
    instructions: null
  };

  addMore(arrayName){
    this.formData[arrayName].push('');
    console.log('form', this.formData);
  }
  constructor(
    private router: Router,
    private apiService: ApiService,
    private location: Location,
    private assessmentService: AssessmentServiceService,
    private dataService: DataserviceService,
    private imagePicker: ImagePicker,
    private navCtrl: NavController,
    ) {
    this.formData.shopping = true;
  }

  ngOnInit() {}

  addDate(){}

  generateClick(ev: any) {
    // ev.click();
    if (ev.checked == true) {
      ev.checked = false;
    } else {
      ev.checked = true;
    }
    console.log(ev.checked);
  }
  addImage() {
    let options: ImagePickerOptions = {
      maximumImagesCount: 4,
    };
    this.imagePicker.getPictures(options).then(
      (results) => {
        console.log(results);
        for (var i = 0; i < results.length; i++) {
          this.imageList.push(results[i]);
        }
      },
      (err) => {}
    );
  }
  removeImg(i) {
    console.log("*", i);
    this.imageList.splice(i, 1);
  }

  changeToggle(formItem: any , ev: any) {
    console.log(ev);
    this.formData[formItem] = ev;
  }
  changeModel(ev: any) {
    console.log(ev);
    // Here you can assign to the variable which is used in ngModal
  }

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.COOKING = this.formData;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.navCtrl.navigateForward(['/assessment/assessmentbar']);
    });
    console.log('called Save', this.formData);
  }

  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'COOKING';

    this.assessmentService.getAssessmentStateObject().then((data) => {
      console.log('came here 33', data);

      // first time load
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        this.formData = data.assessmentValues.CARE_NEEDS[key];
      }
      else{
        // do nothing
      }
      this.readyFlag = true;
    });
  }
}
