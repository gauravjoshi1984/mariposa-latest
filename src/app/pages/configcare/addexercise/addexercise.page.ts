import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigCareServiceService } from '../config-care-service.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { AssessmentServiceService } from '../../assessment/assessment-service.service';

@Component({
  selector: 'app-addexercise',
  templateUrl: './addexercise.page.html',
  styleUrls: ['./addexercise.page.scss'],
})
export class AddexercisePage implements OnInit {

  exerciseForm = new FormGroup({
    type: new FormControl(''),
    timeList: new FormControl([]),
    repeatDays: new FormControl([]),
    assignedTo: new FormControl({}),
    instructions: new FormControl(''),
    startDate: new FormControl(new Date().toISOString().split('T')[0]),
    endDate: new FormControl(new Date().toISOString().split('T')[0]),
    imageList: new FormControl([]),
  });
  careCircleDetails;
  timeList = [];
  timeindex: number;
  instructions = '';
  imageList = [];
  dataLoaded = false;
  editFlag = false;
  exerciseData = [];
  daysList: any;
  selectedDays = [];
  configCareDetails: any;
  key: any;
  index;
  initialTimeList = [];
  constructor(
    private configCareService: ConfigCareServiceService,
    private dataService: DataserviceService,
    private navCtrl: NavController,
    private careCircleService: CreatingcareService,
    private assessmentService: AssessmentServiceService) {
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit(): void {
  }
  addDate() {
    const date = new Date();
    this.initialTimeList.push({hours: date.getHours() , minutes: date.getMinutes()});
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
    this.exerciseForm.patchValue({ [formname]: ev });
  }
  submit() {
    this.exerciseForm.patchValue({ timeList: this.timeList });
    this.exerciseForm.patchValue({ repeatDays: this.selectedDays });
    this.exerciseForm.patchValue({ imageList: this.imageList });
    const configCareVaules = this.configCareDetails.configCareValues;
    this.exerciseForm.controls.startDate.patchValue(this.exerciseForm.controls.startDate.value.split('T')[0]);
    this.exerciseForm.controls.endDate.patchValue(this.exerciseForm.controls.endDate.value.split('T')[0]);
    if (!configCareVaules || !(this.key in configCareVaules) || (configCareVaules[this.key] === null)){
      configCareVaules[this.key] = [];
    }
    if (this.editFlag){
      configCareVaules[this.key][this.index] = this.exerciseForm.value;
    }
    else{
      configCareVaules[this.key].push(this.exerciseForm.value);
    }
    this.configCareService.saveConfigCareDetails(this.key, configCareVaules[this.key]).then(data => {
      this.navCtrl.back();
    });
  }

  addtime(ev, key){
    this.timeList = ev;
  }

  async populateOptions(){
    this.configCareDetails = await this.configCareService.getConfigCareDetails();
    const assessmentState = await this.assessmentService.getAssessmentStateObject();
    this.key = 'EXERCISE';
    this.daysList = this.dataService.getDaysList();
    const configuration = assessmentState.assessmentConfiguration.CARE_NEEDS[this.key];
    configuration.therapy_types.forEach(element => {
      this.exerciseData.push({name : element, value : element});
    });
    const editData = this.configCareService.getConfigEditShared(this.key);
    if (editData){
      const savedConfig = editData.obj;
      this.index = editData.index;
      if (savedConfig != null){
        this.initialTimeList = savedConfig.timeList;
        this.selectedDays = savedConfig.repeatDays;
        this.exerciseForm.controls.startDate.setValue(savedConfig.startDate);
        this.exerciseForm.controls.endDate.setValue(savedConfig.endDate);
        this.exerciseForm.controls.instructions.setValue(savedConfig.instructions);
        this.exerciseForm.controls.type.setValue(savedConfig.type);
        this.exerciseForm.controls.assignedTo.setValue(savedConfig.assignedTo);
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
  openDatePicker(event, element){
    event.stopPropagation();
    element.open();
  }
}
