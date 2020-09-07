import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
import { ConfigCareServiceService } from '../config-care-service.service';

@Component({
  selector: 'app-calenderview',
  templateUrl: './calenderview.page.html',
  styleUrls: ['./calenderview.page.scss'],
})
export class CalenderviewPage implements OnInit {
  lowesttimeper: any;
  highesttimeper: any;
  endTimeTemp: any;
  timeLine = [];

  timeLineShifts: any = {};
  shiftsDataArray = {};
  dataLoaded = false;
  constructor(private navCtrl: NavController, private configCareService: ConfigCareServiceService){}

  async ionViewWillEnter(){
    const schedule: any = await this.configCareService.getCalendatSchedule();
    schedule.forEach(item => {
      const start = new Date(item.startTime);
      const end = new Date(item.endTime);
      const day = start.getDate();
      if (!(day in this.shiftsDataArray)){
        this.shiftsDataArray[day] = {min: moment(item.startTime), max: moment(item.endTime), events: []};
      }
      if (this.shiftsDataArray[day].min.unix() > (start.getTime() / 1000)){
        this.shiftsDataArray[day].min = moment(item.startTime);
      }
      if (this.shiftsDataArray[day].max.unix() < (end.getTime() / 1000)){
        this.shiftsDataArray[day].max = moment(item.endTime);
      }
      item.startTime = moment(item.startTime);
      item.endTime = moment(item.endTime);
      this.shiftsDataArray[day].events.push(item);
    });
    Object.keys(this.shiftsDataArray).forEach(key => {
      this.shiftsDataArray[key].events.sort((a, b) => (a.startTime > b.startTime) ? 1 : ((b.startTime > a.startTime) ? -1 : 0));
    });
    this.dataLoaded = true;
  }
  ngOnInit() {
  }
  // selectChip(item) {
  //   this.selectedDay = item.name;
  //   this.timeLine.forEach(element => {
  //     if(element.name){
  //       element.card=!element.card
  //     }

  //   });
  // }
  ChangeData(ev: any) {
    this.endTimeTemp = null;
    this.timeLine = [];
    this.timeLineShifts = {};
    this.timeLineShifts = Object.assign({}, this.shiftsDataArray[ev]);
    if (this.timeLineShifts !== {}){
      this.initCalenderShift();
    }
  }
  initCalenderShift() {
    this.lowesttimeper = this.timeLineShifts.min.clone();
    this.lowesttimeper.set({minute: 0, second: 0});
    this.highesttimeper = this.timeLineShifts.max.clone();
    this.highesttimeper.set({minute: 59, second: 59});
    // let index = 0;
    this.timeLineShifts.events.forEach((element, i) => {
      // if (this.endTimeTemp && element.startTime && this.endTimeTemp.format('HH:mm:ss') !== element.startTime.format('HH:mm:ss')) {
        const positionDuration = moment.duration(element.startTime.diff(this.lowesttimeper));
        const positionHours: any = Math.abs(positionDuration.asHours());
        // const tempData: any = {
        //   // emptyspace: hrs,
        //   emptyheight: hrs * 84.6,
        // };
        // this.timeLineShifts.events.splice(index, 0, tempData);
        // index++;
      // }
      // if (element.key) {
        const heightDuration = moment.duration(element.endTime.diff(element.startTime));
        const heightHours: any = Math.abs(heightDuration.asHours());
        element.hours = heightHours;
        element.top = positionHours * 84.6;
        element.height = heightHours * 84.6 - 8;
        element.height = element.height < 68 ? 'auto' : element.height + 'px';
        // this.endTimeTemp = element.endTime;
        // index++;
      // }
    });

    const duration = moment.duration(this.highesttimeper.diff(this.lowesttimeper));
    const hours: any = duration.asHours() + 1;
    for (let index = 0; index < hours; index++) {
      if (index === 0) {
        this.timeLine.push(this.lowesttimeper.format('hh A'));
      } else {
        // const temp = this.lowesttimeper;
        this.timeLine.push(this.lowesttimeper.clone().add(index, 'hours').format('hh A'));
      }
    }
  }
  back(){
    this.navCtrl.back();
  }
}
