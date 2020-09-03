import { Component, OnInit } from "@angular/core";
import { ModalController , PopoverController , NavController} from "@ionic/angular";
import { AddactivityComponent } from "./addactivity/addactivity.component";
import * as moment from "moment";
import { DetailComponent } from "./detail/detail.component";
import { ProfilelistComponent } from "../profilelist/profilelist.component";
import { ConfigCareServiceService } from '../../configcare/config-care-service.service';

@Component({
  selector: 'app-calender-shifts',
  templateUrl: './calender-shifts.page.html',
  styleUrls: ['./calender-shifts.page.scss'],
})
export class CalenderShiftsPage implements OnInit {
  segValue = 'activities';
  lowesttimeper: any;
  highesttimeper: any;
  timeLine = [];
  lowesttimeper2: any;
  highesttimeper2: any;
  timeLine2 = [];
  dataLoaded = false;
  shiftsDataArray: any = {};
  activityDataArray: any = {};
  // shiftsDataArray = {
  //   17: [
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('01:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary-17',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('02:00:00 pm', 'HH:mm:ss a'),
  //       endTime: moment('03:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary-17',
  //     },
  //   ],
  //   18: [
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('01:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary-18',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('02:00:00 pm', 'HH:mm:ss a'),
  //       endTime: moment('03:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary*18',
  //     },
  //   ],
  //   19: [
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('01:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary-19',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('02:00:00 pm', 'HH:mm:ss a'),
  //       endTime: moment('03:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary*19',
  //     },
  //   ],
  //   20: [
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('01:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary-20',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('02:00:00 pm', 'HH:mm:ss a'),
  //       endTime: moment('03:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary*20',
  //     },
  //   ],
  //   21: [
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('01:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary-21',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('02:00:00 pm', 'HH:mm:ss a'),
  //       endTime: moment('03:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary*21',
  //     },
  //   ],
  //   22: [
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('01:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary-22',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('02:00:00 pm', 'HH:mm:ss a'),
  //       endTime: moment('03:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary*22',
  //     },
  //   ],
  //   23: [
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('01:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary-23',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('02:00:00 pm', 'HH:mm:ss a'),
  //       endTime: moment('03:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Mary*23',
  //     },
  //   ],
  // };
  // activityDataArray = {
  //   17: [
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('07:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       title: 'Wake Up',
  //       desc: 'message or instructions will be shown here',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('09:00:00 am', 'HH:mm:ss a'),
  //       title: 'Bathing',
  //       desc: 'message or instructions will be shown here',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('09:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('10:00:00 am', 'HH:mm:ss a'),
  //       title: 'Medication: Ibuprofine MKal',
  //       desc: 'Dosage: 1 with warm water, Daily',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('11:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('12:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Shopping: Milk Tin',
  //       desc: 'Every wednesday (10 Ltrs)',
  //     },
  //   ],
  //   18: [
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('07:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       title: 'GYM',
  //       desc: 'message or instructions will be shown here',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('09:00:00 am', 'HH:mm:ss a'),
  //       title: 'DANCE',
  //       desc: 'message or instructions will be shown here',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('09:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('10:00:00 am', 'HH:mm:ss a'),
  //       title: 'Medication: Ibuprofine MKal',
  //       desc: 'Dosage: 1 with warm water, Daily',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('11:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('12:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Shopping: Milk Tin',
  //       desc: 'Every wednesday (10 Ltrs)',
  //     },
  //   ],
  //   19: [
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('07:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       title: 'EAT',
  //       desc: 'message or instructions will be shown here',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('09:00:00 am', 'HH:mm:ss a'),
  //       title: 'Bathing',
  //       desc: 'message or instructions will be shown here',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('11:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('12:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Shopping: Milk Tin',
  //       desc: 'Every wednesday (10 Ltrs)',
  //     },
  //   ],
  //   20: [
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('09:00:00 am', 'HH:mm:ss a'),
  //       title: 'Bathing',
  //       desc: 'message or instructions will be shown here',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('09:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('10:00:00 am', 'HH:mm:ss a'),
  //       title: 'Medication: Ibuprofine MKal',
  //       desc: 'Dosage: 1 with warm water, Daily',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('11:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('12:00:00 pm', 'HH:mm:ss a'),
  //       title: 'Shopping: Milk Tin',
  //       desc: 'Every wednesday (10 Ltrs)',
  //     },
  //   ],
  //   21: [
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('07:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       title: 'Wake Up -21',
  //       desc: 'message or instructions will be shown here',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('09:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('10:00:00 am', 'HH:mm:ss a'),
  //       title: 'Medication: Ibuprofine MKal',
  //       desc: 'Dosage: 1 with warm water, Daily',
  //     },
  //   ],
  //   22: [

  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('07:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       title: 'Wake Up',
  //       desc: 'message or instructions will be shown here',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('09:00:00 am', 'HH:mm:ss a'),
  //       title: 'EAT',
  //       desc: 'message or instructions will be shown here',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('09:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('10:00:00 am', 'HH:mm:ss a'),
  //       title: 'Medication: Ibuprofine MKal',
  //       desc: 'Dosage: 1 with warm water, Daily',
  //     },

  //   ],
  //   23: [
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('08:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('09:00:00 am', 'HH:mm:ss a'),
  //       title: 'Bathing',
  //       desc: 'message or instructions will be shown here',
  //     },
  //     {
  //       startDate: '',
  //       endDate: '',
  //       startTime: moment('09:00:00 am', 'HH:mm:ss a'),
  //       endTime: moment('10:00:00 am', 'HH:mm:ss a'),
  //       title: 'Medication: Ibuprofine MKal',
  //       desc: 'Dosage: 1 with warm water, Daily',
  //     },
  //   ],
  // };
  timeLineShifts: any = {};

  timeLineActivity: any = {};

  selectedDay = 'Mon';
  endTimeTemp: any;
  endTimeTemp2: any;
  constructor( private modalController: ModalController,
    private popoverCtrl: PopoverController,
    private configCareService: ConfigCareServiceService,
    private navCtrl: NavController) {}

  async ionViewWillEnter(){
    const schedule: any = await this.configCareService.getCalendatSchedule();
    schedule.forEach(item => {
      this.initializeTimelineData(this.shiftsDataArray, item);
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
  initCalenderShift() {
    if (!(Object.keys(this.timeLineShifts).length)){
      return;
    }
    this.lowesttimeper = this.timeLineShifts.min;
    this.highesttimeper = this.timeLineShifts.max;

    this.timeLineShifts.events.forEach((element, i) => {
      if (this.endTimeTemp && element.startTime && this.endTimeTemp.format('HH:mm:ss') !== element.startTime.format('HH:mm:ss')) {
        const dur = moment.duration(element.startTime.diff(this.endTimeTemp));
        const hrs: any = dur.asHours();
        const tempData: any = {
          // emptyspace: hrs,
          emptyheight: hrs * 84.6,
        };
        this.timeLineShifts.events.splice(i, 0, tempData);
      }
      if (element.key) {
        const duration = moment.duration(element.endTime.diff(element.startTime));

        // duration in hours
        const hours: any = duration.asHours();
        element.hours = hours;
        element.height = hours * 84.6 - 8;
        element.height = element.height < 68 ? 'auto' : element.height + 'px';
        this.endTimeTemp = element.endTime;
      }
    });
    const duration = moment.duration(
      this.highesttimeper.diff(this.lowesttimeper)
    );

    // duration in hours
    const hours: any = duration.asHours();

    for (let index = 0; index < hours; index++) {
      if (index == 0) {
        this.timeLine.push(this.lowesttimeper.format('hh A'));
      } else {
        const temp = this.lowesttimeper;
        this.timeLine.push(
          this.lowesttimeper.clone().add(index, 'hours').format('hh A')
        );
      }
    }
  }
  initCalenderActivity() {
    if (!(Object.keys(this.timeLineActivity).length)){
      return;
    }
    this.lowesttimeper2 = this.timeLineActivity.min;
    this.highesttimeper2 = this.timeLineActivity.max;
    let index = 0;
    this.timeLineActivity.events.forEach((element, i) => {
      if (this.endTimeTemp2 && element.startTime && this.endTimeTemp2.format('HH:mm:ss') !== element.startTime.format('HH:mm:ss')
      ) {
        const dur = moment.duration(element.startTime.diff(this.endTimeTemp2));
        const hrs: any = dur.asHours();
        const tempData: any = {
          // emptyspace: hrs,
          emptyheight: hrs * 80,
        };
        this.timeLineActivity.events.splice(index, 0, tempData);
        index++;
      }
      if (element.key) {
        const duration = moment.duration(element.endTime.diff(element.startTime));

        // duration in hours
        const hours: any = duration.asHours();
        element.hours = hours;
        element.height = hours * 80 - 8;
        element.height = element.height < 68 ? 'auto' : element.height + 'px';
        this.endTimeTemp2 = element.endTime;
        index++;
      }
    });
    const duration = moment.duration(
      this.highesttimeper2.diff(this.lowesttimeper2)
    );

    // duration in hours
    const hours: any = duration.asHours();

    for (let index = 0; index < hours; index++) {
      if (index == 0) {
        this.timeLine2.push(this.lowesttimeper2.format('hh A'));
      } else {
        const temp = this.lowesttimeper;
        this.timeLine2.push(
          this.lowesttimeper2.clone().add(index, 'hours').format('hh A')
        );
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
  // changeSeg(ev: any) {
  //   console.log("CalenderShiftsPage -> changeSeg -> ev", ev);
  //   if (ev.detail.value == "activities") {
  //     this.timeLineData = this.timeLineActivity;
  //     this.initCalender();
  //   } else {
  //     this.timeLineData = this.timeLineShifts;
  //     this.initCalender();
  //   }
  // }
  async opendetailComponent(item) {
    const modal = await this.modalController.create({
      component: DetailComponent,
      cssClass: "detailcomp-class",
      componentProps: { data: item },
    });
    return await modal.present();
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ProfilelistComponent,
      cssClass: "popoverstylepl",
      event: ev,
      translucent: true,
      mode: "ios",
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
    this.timeLineActivity = Object.assign({}, this.activityDataArray[ev]);

    this.initCalenderActivity();
    this.timeLine = [];
    this.timeLineShifts = {};
    this.timeLineShifts = Object.assign({}, this.shiftsDataArray[ev]);

    this.initCalenderShift();
  }
}
