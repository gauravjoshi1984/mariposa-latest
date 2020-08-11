import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.page.html',
  styleUrls: ['./motivation.page.scss'],
})
export class MotivationPage implements OnInit {

  stateObject: any = {};
  careCircleId;
  userId;
  key: string;
  motivationForm: any = {};
  motivationList = [];
  careCircleName;
  constructor(
    private navCtrl: NavController,
    private assessmentService: AssessmentServiceService,
    private dataService: DataserviceService) { }

  ngOnInit() {
  }

  save(){
    this.stateObject = this.motivationForm;
    this.assessmentService.saveAssessmentState(this.careCircleId, this.key, this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.navCtrl.back();
    });
  }

  generateClick(key) {
    this.motivationForm[key] = !this.motivationForm[key];
  }
  async ionViewWillEnter(){
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.careCircleName = await this.assessmentService.getCareCircleName();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    this.key = 'MOTIVATIONS';
    const data = await this.assessmentService.getAssessmentStateObject();
    this.motivationList = data.assessmentConfiguration[this.key].options;
    this.stateObject = data.assessmentValues[this.key];
    if (this.stateObject != null){
      this.motivationForm = this.stateObject;
    }
  }
}
