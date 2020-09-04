import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-mobility',
  templateUrl: './mobility.page.html',
  styleUrls: ['./mobility.page.scss'],
})
export class MobilityPage implements OnInit {
  stateObject: any = {};
  careCircleId;
  userId;
  readyFlag;
  uses = [];
  other = [];
  formData: any = {uses: {}, other: {}};
  validForm = false;
  constructor(private navCtrl: NavController,
              private assessmentService: AssessmentServiceService,
              private dataService: DataserviceService, ) { }

  imageList = [];

  ngOnInit() {
  }


  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.formData.imageList = this.imageList;
    this.stateObject.MOBILITY = this.formData;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });
  }
  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'MOBILITY';
    const data = await this.assessmentService.getAssessmentStateObject();
    this.stateObject = data.assessmentValues.CARE_NEEDS;
    this.uses = data.assessmentConfiguration.CARE_NEEDS[key].uses;
    this.other = data.assessmentConfiguration.CARE_NEEDS[key].other;
    if (this.stateObject != null && this.stateObject[key] != null){
      this.formData = this.stateObject[key];
      this.imageList = this.formData.imageList ? this.formData.imageList : [];
      this.validForm = true;
    }
  }
  setUsesValue(key){
    this.formData.uses[key] = !this.formData.uses[key];
  }
  setOtherValue(key){
    this.formData.other[key] = !this.formData.other[key];
  }
  changeToggle(key, ev: any) {
    this.formData[key] = ev;
  }
}
