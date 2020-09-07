import { Component, OnInit } from '@angular/core';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { DataserviceService } from '../../dataservice.service';
import { ApiService } from 'src/app/http.service';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-caregiverprofile',
  templateUrl: './caregiverprofile.page.html',
  styleUrls: ['./caregiverprofile.page.scss'],
})
export class CaregiverprofilePage implements OnInit {
  member;
  caregiver = 'Mary Arthur';

  selectedDays = [];

  caregivertable = [
    {
      title: 'Name',
      info: 'Mary Arthur',
    },
    {
      title: 'Gender',
      info: 'Female',
    },
    {
      title: 'Email',
      info: 'Mary@gmail.com',
    },
    {
      title: 'Mobile',
      info: '212 - 232 344 34',
    },
  ];

  daysList = [];
  min = moment().format('YYYY-MM-DD');


  constructor(
    private _creatingCareService: CreatingcareService,
    private dataService: DataserviceService,
    private _apiService: ApiService,
    private navCtrl: NavController,
    private _dataService: DataserviceService) {
    this.daysList = this.dataService.getDaysList();
  }

  ngOnInit() {

  }

  addremoveDay(item, repeatDays) {
    if (repeatDays.includes(item.value)) {
      const index = repeatDays.indexOf(item.value);
      repeatDays.splice(index, 1);
    } else {
      repeatDays.push(item.value);
    }
  }
  async ionViewWillEnter(){
    this.member = await this._creatingCareService.getSelectedMember();
    this.member.configuration.shifts.forEach(shift => {
      shift.startTime = `${(shift.startTime.hours % 12).toString().padStart(2, '0')}:${shift.startTime.minutes.toString().padStart(2, '0')}`;
      shift.endTime = `${(shift.endTime.hours % 12).toString().padStart(2, '0')}:${shift.endTime.minutes.toString().padStart(2, '0')}`;
    });

  }
  // getTimeFromObj(obj){
  //   const time = `${(obj.hours % 12).toString().padStart(2, '0')}:${obj.minutes.toString().padStart(2, '0')} ${obj.hours >= 12 ? 'PM' : 'AM'}`;
  //   return time;
  // }
  addtimeshift(){
    this.member.configuration.shifts.push({
      startTime: '12:00',
      endTime: '12:00',
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
      repeat: [],
    });
  }
  async saveMember(){
    const careCircleId = await this._creatingCareService.getCareCircleID();
    const userInfo = await this._dataService.getUserInfo();

    const memberData = JSON.parse(JSON.stringify(this.member));
    memberData.configuration.shifts.forEach(shift => {
      let time = shift.startTime.split(':');
      shift.startDate = shift.startDate.split('T')[0];
      shift.endDate = shift.endDate.split('T')[0];
      shift.startTime = {hours: +time[0], minutes: +time[1]};
      time = shift.endTime.split(':');
      shift.endTime = {hours: +time[0], minutes: +time[1]};
    });
    this._apiService.put('careCircle/updateShifts/?careCircleId=' + careCircleId + '&userId=' + memberData.userId + '&updatedBy=' + userInfo.userId + '', memberData.configuration.shifts).then((data) => {
      this.navCtrl.back();
    });
  }
}
