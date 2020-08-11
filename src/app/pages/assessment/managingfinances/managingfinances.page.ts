import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-managingfinances',
  templateUrl: './managingfinances.page.html',
  styleUrls: ['./managingfinances.page.scss'],
})
export class ManagingfinancesPage implements OnInit {
  constructor(private assessmentService: AssessmentServiceService,
              private navCtrl: NavController,
              private dataService: DataserviceService) { }

  stateObject: any = {};
  careCircleId;
  userId;
  readyFlag;
  formData: any = {
    transactionAbility: null,
    instructions: null
  };

  imageList = [];


  ngOnInit() {
  }

  changeToggle(formItem: any , ev: any) {
    console.log(ev);
    this.formData[formItem] = ev;
  }
  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.FINANCES = this.formData;
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
    const key = 'FINANCES';

    this.assessmentService.getAssessmentStateObject().then((data) => {
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
