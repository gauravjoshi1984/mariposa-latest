import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigCareServiceService } from '../config-care-service.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';

@Component({
  selector: 'app-schedulelaundry',
  templateUrl: './schedulelaundry.page.html',
  styleUrls: ['./schedulelaundry.page.scss'],
})
export class SchedulelaundryPage implements OnInit {

  laundryForm = new FormGroup({
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
  instructions = '';
  imageList = [];
  dataLoaded = false;
  daysList = [];
  selectedDays = [];


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
    this.laundryForm.patchValue({ timeList: this.timeList });
    this.laundryForm.patchValue({ repeatDays: this.selectedDays });
    this.laundryForm.patchValue({ imageList: this.imageList });
    this.configCareService.saveConfigCareDetails(this.key, [this.laundryForm.value]).then(data => {
      this.navCtrl.back();
    });
  }
  async populateOptions(){
    this.configCareDetails = await this.configCareService.getConfigCareDetails();
    this.key = 'LAUNDRY';
    this.daysList = this.dataService.getDaysList();
    if (this.key in this.configCareDetails.configCareValues && this.configCareDetails.configCareValues[this.key] !== null){
      const savedConfig = this.configCareDetails.configCareValues[this.key][0];
      if (savedConfig != null){
          this.timeList = savedConfig.timeList;
          this.selectedDays = savedConfig.repeatDays;
          this.laundryForm.controls.instructions.setValue(savedConfig.instructions);
          this.laundryForm.controls.assignedTo.setValue(savedConfig.assignedTo);
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
