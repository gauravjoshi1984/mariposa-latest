import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataserviceService } from '../../dataservice.service';
import { Router } from '@angular/router';
import { AssessmentServiceService } from '../assessment-service.service';

@Component({
  selector: 'app-gardening',
  templateUrl: './gardening.page.html',
  styleUrls: ['./gardening.page.scss'],
})
export class GardeningPage implements OnInit {
  constructor(private dataService: DataserviceService,
              private router: Router,
              private assessmentService: AssessmentServiceService,
              private navCtrl: NavController) { }
  gardeningList = ['a', 'b'];
  formData: any = {};
  careCircleId;
  userId;
  stateObject;
  readyFlag;

  imageList = [];

  ngOnInit() {
  }

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.GARDENING = this.formData;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.navCtrl.back();
    });
    console.log('called Save', this.formData);
  }

  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'GARDENING';

    this.assessmentService.getAssessmentStateObject().then((data) => {
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        this.formData = data.assessmentValues.CARE_NEEDS[key];
      }
      else{
        // do nothing
      }
      this.gardeningList = data.assessmentConfiguration.CARE_NEEDS[key].frequency;
      this.readyFlag = true;
    });
  }
}
