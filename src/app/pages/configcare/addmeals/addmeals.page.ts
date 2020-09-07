import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigCareServiceService } from '../config-care-service.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../../assessment/assessment-service.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';

@Component({
  selector: 'app-addmeals',
  templateUrl: './addmeals.page.html',
  styleUrls: ['./addmeals.page.scss'],
})
export class AddmealsPage implements OnInit {

  mealForm = new FormGroup({
    type: new FormControl(''),
    timeList: new FormControl([]),
    favRecepie: new FormControl(),
    repeatDays: new FormControl([]),
    assignedTo: new FormControl({}),
    instructions: new FormControl(''),
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
  dataLoaded = false;
  stateData = [];
  mealData = [
      {
        name: 'Breakfast',
        value: 'breakfast'
      },
      {
        name: 'Lunch',
        value: 'lunch'
      },
      {
        name: 'Dinner',
        value: 'dinner'
      },
      {
        name: 'Snack',
        value: 'snack'
      },
  ];
  frequencyData = [
    {
      name: 'Once',
      value: '1'
    },
    {
      name: 'Twice',
      value: '2'
    },
    {
      name: 'Thrice',
      value: '3'
    },
];

  recepieData = [];

  daysList = [];
  selectedDays = [];
  index;
  editFlag = false;
  constructor(
    private configCareService: ConfigCareServiceService,
    private dataService: DataserviceService,
    private navCtrl: NavController,
    private assessmentService: AssessmentServiceService,
    private careCircleService: CreatingcareService
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
    this.mealForm.patchValue({ [formname]: ev });
  }

  submit() {
    this.mealForm.patchValue({ timeList: this.timeList });
    this.mealForm.patchValue({ repeatDays: this.selectedDays });
    this.mealForm.patchValue({ imageList: this.imageList });
    const configCareVaules = this.configCareDetails.configCareValues;
    if (!configCareVaules || !(this.key in configCareVaules) || (configCareVaules[this.key] === null)){
      configCareVaules[this.key] = [];
    }
    if (this.editFlag){
      configCareVaules[this.key][this.index] = this.mealForm.value;
    }
    else if (this.mealForm.controls.type.value){
      configCareVaules[this.key].push(this.mealForm.value);
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
    this.key = 'COOKING';
    this.daysList = this.dataService.getDaysList();
    this.stateData = assessmentData.assessmentValues.CARE_NEEDS[this.key];
    const editData = this.configCareService.getConfigEditShared(this.key);
    if (editData){
      const savedConfig = editData.obj;
      this.index = editData.index;
      if (savedConfig != null){
        this.timeList = savedConfig.timeList;
        this.selectedDays = savedConfig.repeatDays;
        this.mealForm.controls.instructions.setValue(savedConfig.instructions);
        this.mealForm.controls.type.setValue(savedConfig.type);
        this.mealForm.controls.favRecepie.setValue(savedConfig.favRecepie);
        this.mealForm.controls.assignedTo.setValue(savedConfig.assignedTo);
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

  mealTypeChanged(){
    const mealType = this.mealForm.controls.type.value;
    // this.mealForm.controls.favRecepie.patchValue(null);
    this.recepieData = this.stateData[mealType];
  }

  compareFn(val1, val2): boolean {
    return val1 && val2 ? val1.type === val2.type : val1 === val2;
  }
  navigateToPage(){
    if (this.mealForm.controls.favRecepie.value == 'navigate'){
      this.mealForm.reset();
      this.navCtrl.navigateForward('/assessment/addmeal');
    }
  }
}
