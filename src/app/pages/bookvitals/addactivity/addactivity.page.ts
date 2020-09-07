import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../../assessment/assessment-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { BookVitalsService } from '../book-vital.service';
@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.page.html',
  styleUrls: ['./addactivity.page.scss'],
})
export class AddactivityPage implements OnInit {
  currentDate = moment().format('DD-MMM-YYYY');
  min = moment().format('YYYY-MM-DD');
  timeList = [];
  imageList = [];
  activityList = [];
  careCircleDetails: any;
  constructor(
    private assessmentService: AssessmentServiceService,
    private bookVitalService: BookVitalsService,
    private navCtrl: NavController,
    private careCircleService: CreatingcareService
  ) { }
  activityForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    hours: new FormControl(''),
    minutes: new FormControl(''),
    date: new FormControl( moment().format('YYYY-MM-DD')),
    instructions: new FormControl(''),
    assignedTo: new FormControl({}, [Validators.required]),
    imageList: new FormControl([]),
  });

  ngOnInit() {
  }
  save(){
    this.activityForm.patchValue({ hours: this.timeList[0].hours });
    this.activityForm.patchValue({ minutes: this.timeList[0].minutes });
    this.activityForm.patchValue({ imageList: this.imageList });
    this.activityForm.patchValue({ date: this.activityForm.controls.date.value.split('T')[0] });
    this.bookVitalService.addActivity(this.activityForm.controls.type.value, this.activityForm.value).then((response: any) => {
      if (response){
        this.navCtrl.back();
      }
    });
  }
  addtime(ev, key){
    this.timeList = ev;
  }
  async ionViewWillEnter(){
    this.careCircleDetails = await this.careCircleService.getCareCircleDetails();
    this.careCircleDetails = this.careCircleDetails.members.map(item => {
      return {type: item.userType, assigned: {userId: item.userId, userName: item.userName }};
    });
    // this.careCircleDetails = [{type: 'CAREGIVER'}, ...this.careCircleDetails];
    this.activityList = [];
    const assessmentState = await this.assessmentService.getAssessmentStateObject();
    const careNeedPrefs = assessmentState.assessmentConfiguration.CARE_NEED_PREFS.options;
    const careNeedPrefValues = assessmentState.assessmentValues.CARE_NEED_PREFS;
    careNeedPrefs.forEach(careNeed => {
      if (careNeed.configureCare && careNeedPrefValues[careNeed.key] !== 'none'){
        this.activityList.push({name: careNeed.label, key: careNeed.key});
      }
    });
  }
  compareFn(val1, val2): boolean {
    return val1 && val2 ? val1.type === val2.type : val1 === val2;
  }

}
