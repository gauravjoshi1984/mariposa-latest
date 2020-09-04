import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigCareServiceService } from '../config-care-service.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';

@Component({
  selector: 'app-schedulewoundcare',
  templateUrl: './schedulewoundcare.page.html',
  styleUrls: ['./schedulewoundcare.page.scss'],
})
export class SchedulewoundcarePage implements OnInit {

    woundcareForm = new FormGroup({
    timeList: new FormControl([]),
    woundplace: new FormControl(),
    repeatDays: new FormControl([]),
    assignedTo: new FormControl({}),
    instructions: new FormControl(''),
    startDate: new FormControl('2020-04-12T13:47:20.789'),
    endDate: new FormControl('2020-05-12T13:47:20.789'),
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

  daysList = [];
  selectedDays = [];
  dataLoaded = false;

  constructor(
    private configCareService: ConfigCareServiceService,
    private dataService: DataserviceService,
    private navCtrl: NavController,
    private careCircleService: CreatingcareService
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
    this.woundcareForm.patchValue({ timeList: this.timeList });
    this.woundcareForm.patchValue({ repeatDays: this.selectedDays });
    this.woundcareForm.patchValue({ imageList: this.imageList });
    console.log(this.woundcareForm.value);
    this.woundcareForm.controls.startDate.patchValue(this.woundcareForm.controls.startDate.value.split('T')[0]);
    this.woundcareForm.controls.endDate.patchValue(this.woundcareForm.controls.endDate.value.split('T')[0]);
    this.configCareService.saveConfigCareDetails(this.key, [this.woundcareForm.value]).then(data => {
      this.navCtrl.back();
    });
  }
  async populateOptions(){
    this.configCareDetails = await this.configCareService.getConfigCareDetails();
    this.key = 'WOUND_CARE';
    this.daysList = this.dataService.getDaysList();
    if (this.key in this.configCareDetails.configCareValues && this.configCareDetails.configCareValues[this.key] !== null){
      const savedConfig = this.configCareDetails.configCareValues[this.key][0];
      if (savedConfig != null){
          this.timeList = savedConfig.timeList;
          this.selectedDays = savedConfig.repeatDays;
          this.woundcareForm.controls.woundplace.setValue(savedConfig.woundplace);
          this.woundcareForm.controls.instructions.setValue(savedConfig.instructions);
          this.woundcareForm.controls.assignedTo.setValue(savedConfig.assignedTo);
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
