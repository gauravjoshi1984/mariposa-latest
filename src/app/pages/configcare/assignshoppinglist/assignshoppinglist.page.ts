import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigCareServiceService } from '../config-care-service.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { AssessmentServiceService } from '../../assessment/assessment-service.service';
import { BookVitalsService } from '../../bookvitals/book-vital.service';
import * as moment from 'moment';
@Component({
  selector: 'app-assignshoppinglist',
  templateUrl: './assignshoppinglist.page.html',
  styleUrls: ['./assignshoppinglist.page.scss'],
})
export class AssignshoppinglistPage implements OnInit {
  configCareDetails: any;
  key: any;
  formData: any = {};
  shoppinglist: any = [];
  careCircleDetails;
  timeList = [];

  customPickerOptions: any;
  constructor(
    private configCareService: ConfigCareServiceService,
    private bookVitalService: BookVitalsService,
    private navCtrl: NavController,
    private careCircleService: CreatingcareService,
    private assessmentService: AssessmentServiceService
  ) {}

  ngOnInit() {
    //  this.addDate();
  }
  async populateOptions(){
    this.configCareDetails = await this.configCareService.getConfigCareDetails();
    const assessmentState = await this.assessmentService.getAssessmentStateObject();
    this.key = 'SHOPPING';
    this.shoppinglist = assessmentState.assessmentValues.CARE_NEEDS[this.key].map(item => ({...item, isChecked: false}));
  }
  async ionViewWillEnter(){
    this.careCircleDetails = await this.careCircleService.getCareCircleDetails();
    this.careCircleDetails = this.careCircleDetails.members.map(item => {
      return {type: item.userType, assigned: {userId: item.userId, userName: item.userName }};
    });
    // this.careCircleDetails = [{type: 'CAREGIVER'}, ...this.careCircleDetails];
    this.populateOptions();
  }
  addtime(ev, key) {
    this.timeList = ev;
  }
  save(){
    const dataObj = {date: moment().format('YYYY-MM-DD'), hours: this.timeList[0].hours, minutes: this.timeList[0].minutes, list: []};
    dataObj.list = this.shoppinglist.filter(item => item.isChecked);
    this.bookVitalService.addActivity(this.key, dataObj).then((response: any) => {
      if (response){
        this.navCtrl.back();
      }
    });
  }
  compareFn(val1, val2): boolean {
    return val1 && val2 ? val1.type === val2.type : val1 === val2;
  }
}
