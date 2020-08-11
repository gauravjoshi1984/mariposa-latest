import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataserviceService } from '../../dataservice.service';
import { AssessmentServiceService } from '../assessment-service.service';

@Component({
  selector: 'app-laundry',
  templateUrl: './laundry.page.html',
  styleUrls: ['./laundry.page.scss'],
})
export class LaundryPage implements OnInit {
  constructor(private dataService: DataserviceService,
              private navCtrl: NavController,
              private assessmentService: AssessmentServiceService) { }
  laundryList = ['a', 'b'];
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
    this.stateObject.LAUNDRY = this.formData;
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
    const key = 'LAUNDRY';

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
      this.laundryList = data.assessmentConfiguration.CARE_NEEDS[key].frequency;
      this.readyFlag = true;
    });
  }
}
