import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http.service';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';
import { Location } from '@angular/common';
import {
  ImagePicker,
  ImagePickerOptions,
} from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-dressing',
  templateUrl: './dressing.page.html',
  styleUrls: ['./dressing.page.scss'],
})
export class DressingPage implements OnInit {
  constructor(private router: Router,
              private apiService: ApiService,
              private location: Location,
              private assessmentService: AssessmentServiceService,
              private imagePicker: ImagePicker,
              private dataService: DataserviceService,
              private navCtrl: NavController) { }


  formData: any = {
    dressingPreferences : [{value: ''}],
    instructions: ''
  };
  careCircleId;
  userId;
  stateObject;
  readyFlag;

  imageList = [];

  outfit = [
    {
      name:"Polka pants",
      instructions:"",
    },
    {
      name:"Jeans",
      instructions:"",
    },
  ]

  addMore(arrayName){
    this.formData[arrayName].push({value: ''});
    console.log('form', this.formData);
  }
  ngOnInit() {
  }

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.DRESSING = this.formData;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.navCtrl.back();
    });
  }
  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'DRESSING';

    this.assessmentService.getAssessmentStateObject().then((data) => {
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        this.formData = data.assessmentValues.CARE_NEEDS[key];
      }
      else{
        // data is not present
        // do nothing
      }
      this.readyFlag = true;
    });
  }

}
