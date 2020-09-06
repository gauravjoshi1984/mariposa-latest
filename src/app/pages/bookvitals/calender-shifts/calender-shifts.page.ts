import { Component, OnInit } from '@angular/core';
import { ModalController , PopoverController , NavController} from '@ionic/angular';
import { AddactivityComponent } from './addactivity/addactivity.component';
import * as moment from 'moment';
import { DetailComponent } from './detail/detail.component';
import { ProfilelistComponent } from '../profilelist/profilelist.component';
import { ConfigCareServiceService } from '../../configcare/config-care-service.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';

@Component({
  selector: 'app-calender-shifts',
  templateUrl: './calender-shifts.page.html',
  styleUrls: ['./calender-shifts.page.scss'],
})
export class CalenderShiftsPage implements OnInit {
  segValue = 'activities';
  timeLine = [];
  timeLine2 = [];
  dataLoaded = false;
  shiftsDataArray: any = {};
  activityDataArray: any = {};

  timeLineShifts: any = {};

  timeLineActivity: any = {};

  selectedDay = 'Mon';
  endTimeTemp: any;
  endTimeTemp2: any;
  careCircleDetails: any = [];
  selectedCaregiver = [];
  constructor(
    private modalController: ModalController,
    private popoverCtrl: PopoverController,
    private configCareService: ConfigCareServiceService,
    private navCtrl: NavController,
    private careCircleService: CreatingcareService) {}

  async ionViewWillEnter(){
    const schedule: any = await this.configCareService.getCalendatSchedule();
    this.careCircleDetails = await this.careCircleService.getCareCircleDetails();
    this.careCircleDetails = this.careCircleDetails.members.filter(item => {
      if (item.userType === 'CAREGIVER'){
        item.configuration.shifts.forEach(shift => {
          const shiftStart = moment().set({hour: shift.startTime.hours, minute: shift.startTime.minutes, second: 0});
          const shiftEnd = moment(shift.endDate, 'YYYY-MM-DD').set({hour: 59, minute: 59, second: 0});
          shift.repeat.forEach(day => {
            shiftStart.day(day);
            if (shiftStart.unix() <= shiftEnd.unix()){
              const startTime = shiftStart.format('YYYY-MM-DDThh:mm:ss');
              const endTime = shiftStart.clone().set({hour: shift.endTime.hours, minute: shift.endTime.minutes}).format('YYYY-MM-DDThh:mm:ss');
              this.initializeTimelineData(this.shiftsDataArray, {startTime, endTime, key: item.userName, userId: item.userId});
            }
          });
        });
        return true;
      }
      else{
        return false;
      }
    });
    schedule.forEach(item => {
      // this.initializeTimelineData(this.shiftsDataArray, item);
      this.initializeTimelineData(this.activityDataArray, item);
    });
    Object.keys(this.shiftsDataArray).forEach(key => {
      this.shiftsDataArray[key].events.sort((a, b) => (a.startTime > b.startTime) ? 1 : ((b.startTime > a.startTime) ? -1 : 0));
    });
    Object.keys(this.activityDataArray).forEach(key => {
      this.activityDataArray[key].events.sort((a, b) => (a.startTime > b.startTime) ? 1 : ((b.startTime > a.startTime) ? -1 : 0));
    });
    this.dataLoaded = true;
  }
  initializeTimelineData(object, item){
    const start = new Date(item.startTime);
    const end = new Date(item.endTime);
    const day = start.getDate();
    if (!(day in object)){
      object[day] = {min: moment(item.startTime), max: moment(item.endTime), events: []};
    }
    if (object[day].min.unix() > (start.getTime() / 1000)){
      object[day].min = moment(item.startTime);
    }
    if (object[day].max.unix() < (end.getTime() / 1000)){
      object[day].max = moment(item.endTime);
    }
    item.startTime = moment(item.startTime);
    item.endTime = moment(item.endTime);
    object[day].events.push(item);
  }
  ngOnInit() {}
  initCalendarData(timelineData, timeList){
    if (!(Object.keys(timelineData).length)){
      return;
    }
    const lowesttimeper = timelineData.min.clone();
    lowesttimeper.set({minute: 0, second: 0});
    const highesttimeper = timelineData.max.clone();
    highesttimeper.set({minute: 59, second: 59});
    timelineData.events.forEach((element, i) => {
        const positionDuration = moment.duration(element.startTime.diff(lowesttimeper));
        const positionHours: any = Math.abs(positionDuration.asHours());
        const heightDuration = moment.duration(element.endTime.diff(element.startTime));
        const heightHours: any = Math.abs(heightDuration.asHours());
        element.hours = heightHours;
        element.top = positionHours * 90;
        element.height = heightHours * 90;
        element.height = element.height < 68 ? 'auto' : element.height + 'px';
    });

    const duration = moment.duration(highesttimeper.diff(lowesttimeper));
    const hours: any = duration.asHours() + 1;
    for (let index = 0; index < hours; index++) {
      if (index === 0) {
        timeList.push(lowesttimeper.format('hh A'));
      } else {
        timeList.push(lowesttimeper.clone().add(index, 'hours').format('hh A'));
      }
    }
  }
  // segmentChanged() {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddactivityComponent,
      cssClass: 'addactivity-class',
    });
    return await modal.present();
  }
  async opendetailComponent(item) {
    const modal = await this.modalController.create({
      component: DetailComponent,
      cssClass: 'detailcomp-class',
      componentProps: { data: item },
    });
    return await modal.present();
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ProfilelistComponent,
      cssClass: 'popoverstylepl',
      event: ev,
      translucent: true,
      mode: 'ios',
    });
    popover.onDidDismiss().then((x) => {
      // if (x.data === "delete") {
      // }
    });
    return await popover.present();
  }

  ChangeData(ev: any) {

    this.endTimeTemp = null;
    this.endTimeTemp2 = null;
    this.timeLine2 = [];
    this.timeLine = [];
    this.timeLineActivity = {};
    // problem with in this array activityDataArray[0]...it contains empty elements
    this.timeLineActivity =  Object.assign({}, this.activityDataArray[ev]);
    if (this.timeLineActivity !== {}){
      this.initCalendarData(this.timeLineActivity, this.timeLine2);
    }

    this.timeLine = [];
    this.timeLineShifts = {};
    this.timeLineShifts = Object.assign({}, this.shiftsDataArray[ev]);
    if (this.timeLineShifts !== {}){
      this.initCalendarData(this.timeLineShifts, this.timeLine);
    }
  }
  checkCareGiver(event){
    if (this.selectedCaregiver.length){
      return this.selectedCaregiver.indexOf(event.userId) >= 0;
    }
    else{
      return true;
    }
  }
  setData(ev: any) {
    console.log(ev);
    this.segValue = ev;
  }
}
