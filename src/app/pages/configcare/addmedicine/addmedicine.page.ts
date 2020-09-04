import { Component, OnInit } from '@angular/core';
import { IonDatetime, NavController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigCareServiceService } from '../config-care-service.service';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { AssessmentServiceService } from '../../assessment/assessment-service.service';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.page.html',
  styleUrls: ['./addmedicine.page.scss'],
})
export class AddmedicinePage implements OnInit {
  configCareDetails: any;
  key: any;
  careCircleDetails;
  medicineType = [];
  stateData = {};
  minDate = new Date().toISOString().split('T')[0];
  medicineForm = new FormGroup({
    type: new FormControl(''),
    name: new FormControl(),
    timeList: new FormControl([]),
    repeatDays: new FormControl([]),
    assignedTo: new FormControl({}),
    dosage: new FormControl(''),
    startDate: new FormControl(new Date().toISOString().split('T')[0]),
    endDate: new FormControl(new Date().toISOString().split('T')[0]),
    instructions: new FormControl(''),
    imageList: new FormControl([]),
  });
  timeList = [];
  initialTimeList = [];
  imageList = [];
  mediceneData = [];
  daysList: any;
  selectedDays = [];
  index;
  editFlag = false;
  dataLoaded;
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
    this.addDate();
  }
  addDate() {
    const date = new Date();
    this.initialTimeList.push({hours: 1 , minutes: date.getMinutes()});
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
    this.medicineForm.patchValue({ [formname]: ev });
  }
  async submit() {
    this.medicineForm.patchValue({ timeList: this.timeList });
    this.medicineForm.patchValue({ repeatDays: this.selectedDays });
    this.medicineForm.patchValue({ imageList: this.imageList });
    const configCareVaules = this.configCareDetails.configCareValues;
    this.medicineForm.controls.startDate.patchValue(this.medicineForm.controls.startDate.value.split('T')[0]);
    this.medicineForm.controls.endDate.patchValue(this.medicineForm.controls.endDate.value.split('T')[0]);
    if (!configCareVaules || !(this.key in configCareVaules) || (configCareVaules[this.key] === null)){
      configCareVaules[this.key] = [];
    }
    if (this.editFlag){
      configCareVaules[this.key][this.index] = this.medicineForm.value;
    }
    else if (this.medicineForm.controls.type.value){
      configCareVaules[this.key].push(this.medicineForm.value);
    }
    this.configCareService.saveConfigCareDetails(this.key, configCareVaules[this.key]).then(data => {
      this.navCtrl.back();
    });
  }

  addtime(ev, key){
    this.timeList = ev;
  }

  async populateOptions(){
    this.medicineType = [];
    const assessmentData = await this.assessmentService.getAssessmentStateObject();
    const assessmentValues = assessmentData.assessmentValues.CARE_NEEDS[this.key].medication;
    assessmentValues.forEach((val: any) => {
      // if (!(val.medicineType in this.stateData)){
      //   this.stateData[val.medicineType] = [];
      // }
      this.stateData[val.medicineType] = [];
      this.stateData[val.medicineType].push(val);
    });
    this.daysList = this.dataService.getDaysList();
    const configuration = this.configCareDetails.configCareConfiguration[this.key];
    await configuration.type.forEach(element => {
      this.medicineType.push({name : element, value : element});
    });
    const editData = this.configCareService.getConfigEditShared(this.key);
    if (editData){
      const savedConfig = editData.obj;
      this.index = editData.index;
      if (savedConfig != null){
        this.timeList = savedConfig.timeList;
        this.selectedDays = savedConfig.repeatDays;
        this.medicineForm.controls.instructions.setValue(savedConfig.instructions);
        this.medicineForm.controls.type.setValue(savedConfig.type);
        this.medicineForm.controls.name.setValue(savedConfig.name);
        this.medicineForm.controls.dosage.setValue(savedConfig.dosage);
        this.medicineForm.controls.startDate.setValue(savedConfig.startDate);
        this.medicineForm.controls.endDate.setValue(savedConfig.endDate);
        this.medicineForm.controls.assignedTo.setValue(savedConfig.assignedTo);
        this.imageList = savedConfig.imageList;
        this.editFlag = true;
      }
      this.configCareService.setConfigEditShared(null, this.key);
    }
    this.dataLoaded = true;
    // const savedConfig = this.configCareDetails.configCareValues[this.key];
    // if (savedConfig != null){
    //   // retreive and set values
    //   setTimeout(() => {
    //     this.initialTimeList = savedConfig.timeList;
    //     this.selectedDays = savedConfig.repeatDays;
    //     this.medicineForm.controls.startDate.setValue(savedConfig.startDate);
    //     this.medicineForm.controls.endDate.setValue(savedConfig.endDate);
    //     this.medicineForm.controls.dosage.setValue(savedConfig.dosage);
    //     this.medicineForm.controls.medicineType.setValue(savedConfig.medicineType);
    //     this.medicineForm.controls.medicineName.setValue(savedConfig.medicineName);
    //     this.medicineForm.controls.instructions.setValue(savedConfig.instructions);
    //   }, 10);
    // }
  }


  async ionViewWillEnter(){
    this.careCircleDetails = await this.careCircleService.getCareCircleDetails();
    this.careCircleDetails = this.careCircleDetails.members.filter(member => member.userType !== 'CAREGIVER').map(item => {
      return {type: item.userType, assigned: {userId: item.userId, userName: item.userName }};
    });
    this.careCircleDetails = [{type: 'CAREGIVER'}, ...this.careCircleDetails];
    this.configCareDetails = await this.configCareService.getConfigCareDetails();
    this.key = 'MEDICATION';
    this.populateOptions();
  }
  mediceneTypeChanged(){
    const mediceneType = this.medicineForm.controls.type.value;
    // this.mealForm.controls.favRecepie.patchValue(null);
    this.mediceneData = this.stateData[mediceneType];
  }
  compareFn(val1, val2): boolean {
    return val1 && val2 ? val1.type === val2.type : val1 === val2;
  }
  compareFnValue(val1, val2): boolean {
    return val1 === val2;
  }
  navigateToPage(){
    if (this.medicineForm.controls.name.value == 'navigate'){
      this.medicineForm.reset();
      this.navCtrl.navigateForward('/assessment/addMedication');
    }
  }
  openDatePicker(event, element){
    event.stopPropagation();
    element.open();
  }
}
