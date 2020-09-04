import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigCareServiceService } from '../config-care-service.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { AssessmentServiceService } from '../../assessment/assessment-service.service';

@Component({
  selector: 'app-addvitals',
  templateUrl: './addvitals.page.html',
  styleUrls: ['./addvitals.page.scss'],
})
export class AddvitalsPage implements OnInit {

  vitalForm = new FormGroup({
    type: new FormControl(''),
    timeList: new FormControl([]),
    repeatDays: new FormControl([]),
    instructions: new FormControl(''),
    assignedTo: new FormControl({}),
    imageList: new FormControl([]),
  });

  careCircleDetails;
  configCareDetails: any;
  key: any;
  timeList = [];
  customPickerOptions: any;
  timeindex: number;
  instructions = '';
  imageList = [];
  dataLoaded;
  vitalData = [];
  daysList = [];
  selectedDays = [];
  stateData;
  editFlag;
  index;
  constructor(
    private configCareService: ConfigCareServiceService,
    private dataService: DataserviceService,
    private navCtrl: NavController,
    private careCircleService: CreatingcareService,
    private assessmentService: AssessmentServiceService,
  ) {

  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit(): void {
    this.addDate();
  }
  addDate() {
    this.timeList.push(new Date());
  }


  addremoveDay(item) {
    if (this.selectedDays.includes(item.value)) {
      const index = this.selectedDays.indexOf(item.value);
      this.selectedDays.splice(index, 1);
    } else {
      this.selectedDays.push(item.value);
    }
  }

  setData(ev: any, formname) {
    this.vitalForm.patchValue({ [formname]: ev });
  }

  submit() {
    this.vitalForm.patchValue({ timeList: this.timeList });
    this.vitalForm.patchValue({ repeatDays: this.selectedDays });
    this.vitalForm.patchValue({ imageList: this.imageList });
    const configCareVaules = this.configCareDetails.configCareValues;
    if (!configCareVaules || !(this.key in configCareVaules) || (configCareVaules[this.key] === null)){
      configCareVaules[this.key] = [];
    }
    if (this.editFlag){
      configCareVaules[this.key][this.index] = this.vitalForm.value;
    }
    else if (this.vitalForm.controls.type.value){
      configCareVaules[this.key].push(this.vitalForm.value);
    }
    this.configCareService.saveConfigCareDetails(this.key, configCareVaules[this.key]).then(data => {
      this.navCtrl.back();
    });
  }

  addtime(ev, key){
    this.timeList = ev;
  }
  async populateOptions(){
    const assessmentData = await this.assessmentService.getAssessmentStateObject();
    this.configCareDetails = await this.configCareService.getConfigCareDetails();
    this.key = 'VITALS';
    this.vitalData = this.configCareDetails.configCareConfiguration[this.key].type;
    this.daysList = this.dataService.getDaysList();
    this.stateData = assessmentData.assessmentValues.CARE_NEEDS[this.key];
    const editData = this.configCareService.getConfigEditShared(this.key);
    if (editData){
      const savedConfig = editData.obj;
      this.index = editData.index;
      if (savedConfig != null){
        this.timeList = savedConfig.timeList;
        this.selectedDays = savedConfig.repeatDays;
        this.vitalForm.controls.instructions.setValue(savedConfig.instructions);
        this.vitalForm.controls.type.setValue(savedConfig.type);
        this.vitalForm.controls.assignedTo.setValue(savedConfig.assignedTo);
        this.imageList = savedConfig.imageList;
        this.editFlag = true;
      }
      this.configCareService.setConfigEditShared(null, this.key);
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
    return val1 && val2 ? val1.type === val2.type : val1 === val2;
  }
  compareFnValue(val1, val2): boolean {
    console.log(val1, val2);
    return val1 === val2;
  }
}
