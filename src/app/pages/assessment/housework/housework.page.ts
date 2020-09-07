import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataserviceService } from '../../dataservice.service';
import { AssessmentServiceService } from '../assessment-service.service';

@Component({
  selector: 'app-housework',
  templateUrl: './housework.page.html',
  styleUrls: ['./housework.page.scss'],
})
export class HouseworkPage implements OnInit {
  constructor(private dataService: DataserviceService,
              private navCtrl: NavController,
              private assessmentService: AssessmentServiceService) { }
  houseWorkList = [];
  formData = {
    frequency: null,
    instructions: null
  };
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
    this.stateObject.HOUSE_WORK = this.formData;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });
  }

  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'HOUSE_WORK';

    this.assessmentService.getAssessmentStateObject().then((data) => {
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        this.formData = data.assessmentValues.CARE_NEEDS[key];
      }
      else{
        // do nothing
      }
      this.houseWorkList = data.assessmentConfiguration.CARE_NEEDS[key].frequency;
      this.readyFlag = true;
    });

  }
}
