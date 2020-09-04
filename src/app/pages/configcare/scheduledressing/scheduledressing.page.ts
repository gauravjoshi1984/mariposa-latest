import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigCareServiceService } from '../config-care-service.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { AssessmentServiceService } from '../../assessment/assessment-service.service';


@Component({
  selector: 'app-scheduledressing',
  templateUrl: './scheduledressing.page.html',
  styleUrls: ['./scheduledressing.page.scss'],
})
export class ScheduledressingPage implements OnInit {

  dressingForm = new FormGroup({
    timeList: new FormControl([]),
    outfitType: new FormControl(''),
    repeatDays: new FormControl([]),
    assignedTo: new FormControl({}),
    instructions: new FormControl(''),
    imageList: new FormControl([]),
  });

  configCareDetails: any;
  key: any;
  timeList = [];
  customPickerOptions: any;
  timeindex: number;
  instructions = '';
  imageList = [];

  outfitData = [];
  dataLoaded;
  careCircleDetails;
  daysList = [];
  selectedDays = [];

  constructor(
    private configCareService: ConfigCareServiceService,
    private dataService: DataserviceService,
    private navCtrl: NavController,
    private careCircleService: CreatingcareService,
    private assessmentService: AssessmentServiceService,
  ) { }

  ngOnInit() {
  }

  addtime(ev, key){
    this.timeList = ev;
  }

  addremoveDay(item) {
    if (this.selectedDays.includes(item.value)) {
      const index = this.selectedDays.indexOf(item.value);
      this.selectedDays.splice(index, 1);
    } else {
      this.selectedDays.push(item.value);
    }
  }

  submit() {
    this.dressingForm.patchValue({ timeList: this.timeList });
    this.dressingForm.patchValue({ repeatDays: this.selectedDays });
    this.dressingForm.patchValue({ imageList: this.imageList });
    console.log(this.dressingForm.value);
    this.configCareService.saveConfigCareDetails(this.key, [this.dressingForm.value]).then(data => {
      this.navCtrl.back();
    });
  }

  setData(ev: any, formname) {
    this.dressingForm.patchValue({ [formname]: ev });
  }
  async populateOptions(){
    this.configCareDetails = await this.configCareService.getConfigCareDetails();
    const assessmentData = await this.assessmentService.getAssessmentStateObject();
    this.key = 'DRESSING';
    this.daysList = this.dataService.getDaysList();
    this.outfitData = assessmentData.assessmentValues.CARE_NEEDS[this.key];
    if (this.key in this.configCareDetails.configCareValues && this.configCareDetails.configCareValues[this.key] !== null){
      const savedConfig = this.configCareDetails.configCareValues[this.key][0];
      console.log(savedConfig);
      if (savedConfig != null){
          this.timeList = savedConfig.timeList;
          this.selectedDays = savedConfig.repeatDays;
          this.dressingForm.controls.outfitType.setValue(savedConfig.outfitType);
          this.dressingForm.controls.instructions.setValue(savedConfig.instructions);
          this.dressingForm.controls.assignedTo.setValue(savedConfig.assignedTo);
          this.imageList = savedConfig.imageList;
      }
    }
    this.dataLoaded = true;
  }

  async ionViewWillEnter(){
    this.careCircleDetails = await this.careCircleService.getCareCircleDetails();
    this.careCircleDetails = this.careCircleDetails.members.filter(member => member.userType !== 'CAREGIVER').map(item => {
      return {type: item.userType, assigned: {userId: item.userId, userName: item.userName }};
    });
    this.careCircleDetails = [{type: 'CAREGIVER'}, ...this.careCircleDetails];
    this.populateOptions();
  }
  compareFn(val1, val2): boolean {
    return val1 && val2 ? (val1.type === val2.type || val1.name === val2.name) : val1 === val2;
  }
}
