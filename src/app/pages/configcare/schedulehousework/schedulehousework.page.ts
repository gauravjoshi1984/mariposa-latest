import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigCareServiceService } from '../config-care-service.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';

@Component({
  selector: 'app-schedulehousework',
  templateUrl: './schedulehousework.page.html',
  styleUrls: ['./schedulehousework.page.scss'],
})
export class SchedulehouseworkPage implements OnInit {

  houseworkForm = new FormGroup({
    timeList: new FormControl([]),
    repeatDays: new FormControl([]),
    assignedTo: new FormControl({}),
    instructions: new FormControl(''),
    imageList: new FormControl([]),
  });
  careCircleDetails;
  timeList = [];
  customPickerOptions: any;
  timeindex: number;
  instructions = '';
  imageList = [];
  dataLoaded;
  daysList = [];
  selectedDays = [];
  configCareDetails: any;
  key: any;

  constructor(
    private configCareService: ConfigCareServiceService,
    private dataService: DataserviceService,
    private navCtrl: NavController,
    private careCircleService: CreatingcareService
  ) { }

  ngOnInit() {
  }
  addDate() {
    const date = new Date();
    this.timeList.push({hours: date.getHours() , minutes: date.getMinutes()});
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
  setData(ev: any, formname) {
    this.houseworkForm.patchValue({ [formname]: ev });
  }

  submit() {
    this.houseworkForm.patchValue({ timeList: this.timeList });
    this.houseworkForm.patchValue({ repeatDays: this.selectedDays });
    this.houseworkForm.patchValue({ imageList: this.imageList });
    this.configCareService.saveConfigCareDetails(this.key, [this.houseworkForm.value]).then(data => {
      this.navCtrl.back();
    });
  }
  async populateOptions(){
    this.configCareDetails = await this.configCareService.getConfigCareDetails();
    this.key = 'HOUSE_WORK';
    this.daysList = this.dataService.getDaysList();
    const configuration = this.configCareDetails.configCareConfiguration[this.key];
    if (this.key in this.configCareDetails.configCareValues && this.configCareDetails.configCareValues[this.key] !== null){
      const savedConfig = this.configCareDetails.configCareValues[this.key][0];
      if (savedConfig != null){
          this.timeList = savedConfig.timeList;
          this.selectedDays = savedConfig.repeatDays;
          this.houseworkForm.controls.instructions.setValue(savedConfig.instructions);
          this.houseworkForm.controls.assignedTo.setValue(savedConfig.assignedTo);
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

}
