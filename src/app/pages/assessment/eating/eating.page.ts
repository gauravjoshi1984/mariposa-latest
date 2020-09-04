import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';


@Component({
  selector: 'app-eating',
  templateUrl: './eating.page.html',
  styleUrls: ['./eating.page.scss'],
})
export class EatingPage implements OnInit {
  constructor(private assessmentService: AssessmentServiceService,
              private dataService: DataserviceService,
              private navCtrl: NavController) { }
  stateObject: any = {};
  careCircleId;
  userId;
  readyFlag;
  formData: any = {
    chew: null,
    serviceRequired: null,
    instructions: null
  };

  imageList = [];

  ngOnInit() {
  }

  changeToggle(formItem: any , ev: any) {
    this.formData[formItem] = ev;
  }


  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.EATING = {...this.formData, imageList: this.imageList};
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });
  }

  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'EATING';

    this.assessmentService.getAssessmentStateObject().then((data) => {
      // first time load
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        this.formData = data.assessmentValues.CARE_NEEDS[key];
        this.imageList = this.formData.imageList ? this.formData.imageList : [];
      }
      else{
        // do nothing
      }
      this.readyFlag = true;
    });
  }
}
