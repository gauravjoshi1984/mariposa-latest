import { Component, ViewChild } from '@angular/core';
import { IonDatetime, NavController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigCareServiceService } from '../config-care-service.service';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
@Component({
  selector: 'app-bathing',
  templateUrl: './bathing.page.html',
  styleUrls: ['./bathing.page.scss'],
})
export class BathingPage {
  @ViewChild('datepicker') datepicker: IonDatetime;

  bathingForm = new FormGroup({
    timeList: new FormControl([]),
    repeatDays: new FormControl([]),
    instructions: new FormControl(''),
    assignedTo: new FormControl({}),
    imageList: new FormControl([]),
  });
  dataLoaded;
  careCircleDetails;
  timeList = [];
  timeindex: number;
  instructions = '';
  imageList = [];
  configCareDetails: any;
  key: any;
  daysList = [];
  selectedDays = [];
  constructor(
    private configCareService: ConfigCareServiceService,
    private dataService: DataserviceService,
    private navCtrl: NavController,
    private careCircleService: CreatingcareService
  ) {
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
    this.timeList.push({hours: date.getHours() , minutes: date.getMinutes()});
  }
  changeTime(i) {
    this.datepicker.open().then((x) => {
      this.timeindex = i;
    });
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
    this.bathingForm.patchValue({ timeList: this.timeList });
    this.bathingForm.patchValue({ repeatDays: this.selectedDays });
    this.bathingForm.patchValue({ imageList: this.imageList });
    this.configCareService.saveConfigCareDetails(this.key, [this.bathingForm.value]).then(data => {
      this.navCtrl.back();
    });
  }
  setData(ev: any, formname) {
    this.bathingForm.patchValue({ [formname]: ev });
  }
  async populateOptions(){
    this.configCareDetails = await this.configCareService.getConfigCareDetails();
    this.key = 'BATHING';
    this.daysList = this.dataService.getDaysList();
    const configuration = this.configCareDetails.configCareConfiguration[this.key];
    if (this.key in this.configCareDetails.configCareValues && this.configCareDetails.configCareValues[this.key] !== null){
      const savedConfig = this.configCareDetails.configCareValues[this.key][0];
      if (savedConfig != null){
          this.timeList = savedConfig.timeList;
          this.selectedDays = savedConfig.repeatDays;
          this.bathingForm.controls.instructions.setValue(savedConfig.instructions);
          this.bathingForm.controls.assignedTo.setValue(savedConfig.assignedTo);
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
    return val1 && val2 ? val1.type === val2.type : val1 === val2;
  }
  addtime(ev, key){
    this.timeList = ev;
  }
}
