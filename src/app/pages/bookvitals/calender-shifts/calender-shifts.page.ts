import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AddactivityComponent } from "./addactivity/addactivity.component";
import * as moment from "moment";

@Component({
  selector: "app-calender-shifts",
  templateUrl: "./calender-shifts.page.html",
  styleUrls: ["./calender-shifts.page.scss"],
})
export class CalenderShiftsPage implements OnInit {
  segValue = "activities";
  lowesttimeper: any;
  highesttimeper: any;
  timeLine = [];
  lowesttimeper2: any;
  highesttimeper2: any;
  timeLine2 = [];

  shiftsDataArray = {
    17: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("01:00:00 pm", "HH:mm:ss a"),
        title: "Mary-17",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("02:00:00 pm", "HH:mm:ss a"),
        endTime: moment("03:00:00 pm", "HH:mm:ss a"),
        title: "Mary-17",
      },
    ],
    18: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("01:00:00 pm", "HH:mm:ss a"),
        title: "Mary-18",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("02:00:00 pm", "HH:mm:ss a"),
        endTime: moment("03:00:00 pm", "HH:mm:ss a"),
        title: "Mary*18",
      },
    ],
    19: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("01:00:00 pm", "HH:mm:ss a"),
        title: "Mary-19",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("02:00:00 pm", "HH:mm:ss a"),
        endTime: moment("03:00:00 pm", "HH:mm:ss a"),
        title: "Mary*19",
      },
    ],
    20: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("01:00:00 pm", "HH:mm:ss a"),
        title: "Mary-20",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("02:00:00 pm", "HH:mm:ss a"),
        endTime: moment("03:00:00 pm", "HH:mm:ss a"),
        title: "Mary*20",
      },
    ],
    21: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("01:00:00 pm", "HH:mm:ss a"),
        title: "Mary-21",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("02:00:00 pm", "HH:mm:ss a"),
        endTime: moment("03:00:00 pm", "HH:mm:ss a"),
        title: "Mary*21",
      },
    ],
    22: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("01:00:00 pm", "HH:mm:ss a"),
        title: "Mary-22",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("02:00:00 pm", "HH:mm:ss a"),
        endTime: moment("03:00:00 pm", "HH:mm:ss a"),
        title: "Mary*22",
      },
    ],
    23: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("01:00:00 pm", "HH:mm:ss a"),
        title: "Mary-23",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("02:00:00 pm", "HH:mm:ss a"),
        endTime: moment("03:00:00 pm", "HH:mm:ss a"),
        title: "Mary*23",
      },
    ],
  };
  activityDataArray = {
    17: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("07:00:00 am", "HH:mm:ss a"),
        endTime: moment("08:00:00 am", "HH:mm:ss a"),
        title: "Wake Up - 17",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("09:00:00 am", "HH:mm:ss a"),
        title: "Bathing",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("09:00:00 am", "HH:mm:ss a"),
        endTime: moment("10:00:00 am", "HH:mm:ss a"),
        title: "Medication: Ibuprofine MKal",
        desc: "Dosage: 1 with warm water, Daily",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("11:00:00 am", "HH:mm:ss a"),
        endTime: moment("12:00:00 pm", "HH:mm:ss a"),
        title: "Shopping: Milk Tin",
        desc: "Every wednesday (10 Ltrs)",
      },
    ],
    18: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("07:00:00 am", "HH:mm:ss a"),
        endTime: moment("08:00:00 am", "HH:mm:ss a"),
        title: "Wake Up - 18",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("09:00:00 am", "HH:mm:ss a"),
        title: "Bathing",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("09:00:00 am", "HH:mm:ss a"),
        endTime: moment("10:00:00 am", "HH:mm:ss a"),
        title: "Medication: Ibuprofine MKal",
        desc: "Dosage: 1 with warm water, Daily",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("11:00:00 am", "HH:mm:ss a"),
        endTime: moment("12:00:00 pm", "HH:mm:ss a"),
        title: "Shopping: Milk Tin",
        desc: "Every wednesday (10 Ltrs)",
      },
    ],
    19: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("07:00:00 am", "HH:mm:ss a"),
        endTime: moment("08:00:00 am", "HH:mm:ss a"),
        title: "Wake Up -19",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("09:00:00 am", "HH:mm:ss a"),
        title: "Bathing",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("09:00:00 am", "HH:mm:ss a"),
        endTime: moment("10:00:00 am", "HH:mm:ss a"),
        title: "Medication: Ibuprofine MKal",
        desc: "Dosage: 1 with warm water, Daily",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("11:00:00 am", "HH:mm:ss a"),
        endTime: moment("12:00:00 pm", "HH:mm:ss a"),
        title: "Shopping: Milk Tin",
        desc: "Every wednesday (10 Ltrs)",
      },
    ],
    20: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("07:00:00 am", "HH:mm:ss a"),
        endTime: moment("08:00:00 am", "HH:mm:ss a"),
        title: "Wake Up - 20 ",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("09:00:00 am", "HH:mm:ss a"),
        title: "Bathing",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("09:00:00 am", "HH:mm:ss a"),
        endTime: moment("10:00:00 am", "HH:mm:ss a"),
        title: "Medication: Ibuprofine MKal",
        desc: "Dosage: 1 with warm water, Daily",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("11:00:00 am", "HH:mm:ss a"),
        endTime: moment("12:00:00 pm", "HH:mm:ss a"),
        title: "Shopping: Milk Tin",
        desc: "Every wednesday (10 Ltrs)",
      },
    ],
    21: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("07:00:00 am", "HH:mm:ss a"),
        endTime: moment("08:00:00 am", "HH:mm:ss a"),
        title: "Wake Up -21",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("09:00:00 am", "HH:mm:ss a"),
        title: "Bathing",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("09:00:00 am", "HH:mm:ss a"),
        endTime: moment("10:00:00 am", "HH:mm:ss a"),
        title: "Medication: Ibuprofine MKal",
        desc: "Dosage: 1 with warm water, Daily",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("11:00:00 am", "HH:mm:ss a"),
        endTime: moment("12:00:00 pm", "HH:mm:ss a"),
        title: "Shopping: Milk Tin",
        desc: "Every wednesday (10 Ltrs)",
      },
    ],
    22: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("07:00:00 am", "HH:mm:ss a"),
        endTime: moment("08:00:00 am", "HH:mm:ss a"),
        title: "Wake Up - 22",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("09:00:00 am", "HH:mm:ss a"),
        title: "Bathing",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("09:00:00 am", "HH:mm:ss a"),
        endTime: moment("10:00:00 am", "HH:mm:ss a"),
        title: "Medication: Ibuprofine MKal",
        desc: "Dosage: 1 with warm water, Daily",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("11:00:00 am", "HH:mm:ss a"),
        endTime: moment("12:00:00 pm", "HH:mm:ss a"),
        title: "Shopping: Milk Tin",
        desc: "Every wednesday (10 Ltrs)",
      },
    ],
    23: [
      {
        startDate: "",
        endDate: "",
        startTime: moment("07:00:00 am", "HH:mm:ss a"),
        endTime: moment("08:00:00 am", "HH:mm:ss a"),
        title: "Wake Up - 23",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("08:00:00 am", "HH:mm:ss a"),
        endTime: moment("09:00:00 am", "HH:mm:ss a"),
        title: "Bathing",
        desc: "message or instructions will be shown here",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("09:00:00 am", "HH:mm:ss a"),
        endTime: moment("10:00:00 am", "HH:mm:ss a"),
        title: "Medication: Ibuprofine MKal",
        desc: "Dosage: 1 with warm water, Daily",
      },
      {
        startDate: "",
        endDate: "",
        startTime: moment("11:00:00 am", "HH:mm:ss a"),
        endTime: moment("12:00:00 pm", "HH:mm:ss a"),
        title: "Shopping: Milk Tin",
        desc: "Every wednesday (10 Ltrs)",
      },
    ],
  };
  timeLineShifts = [];

  timeLineActivity = [];

  selectedDay = "Mon";
  endTimeTemp: any;
  endTimeTemp2: any;
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    // this.timeLineData = this.timeLineActivity;
    // this.initCalenderActivity();
    // this.initCalenderShift();
  }
  initCalenderShift() {
    this.lowesttimeper = this.timeLineShifts[0].startTime;
    this.highesttimeper = this.timeLineShifts[
      this.timeLineShifts.length - 1
    ].endTime;

    this.timeLineShifts.forEach((element, i) => {
      if (
        this.endTimeTemp &&
        this.endTimeTemp.format("HH:mm:ss") !=
          element.startTime.format("HH:mm:ss")
      ) {
        let dur = moment.duration(element.startTime.diff(this.endTimeTemp));
        let hrs: any = dur.asHours();
        let tempData: any = {
          // emptyspace: hrs,
          emptyheight: hrs * 84.6,
        };
        this.timeLineShifts.splice(i, 0, tempData);
      }
      if (element.title) {
        let duration = moment.duration(element.endTime.diff(element.startTime));

        // duration in hours
        let hours: any = duration.asHours();
        element["hours"] = hours;
        element["height"] = hours * 84.6 - 8;

        this.endTimeTemp = element.endTime;
      }
    });
    let duration = moment.duration(
      this.highesttimeper.diff(this.lowesttimeper)
    );

    // duration in hours
    let hours: any = duration.asHours();

    for (let index = 0; index < hours; index++) {
      if (index == 0) {
        this.timeLine.push(this.lowesttimeper.format("hh A"));
      } else {
        let temp = this.lowesttimeper;
        this.timeLine.push(
          this.lowesttimeper.clone().add(index, "hours").format("hh A")
        );
      }
    }
  }
  initCalenderActivity() {
    this.lowesttimeper2 = this.timeLineActivity[0].startTime;
    this.highesttimeper2 = this.timeLineActivity[
      this.timeLineActivity.length - 1
    ].endTime;

    this.timeLineActivity.forEach((element, i) => {
      if (
        this.endTimeTemp2 &&
        this.endTimeTemp2.format("HH:mm:ss") !=
          element.startTime.format("HH:mm:ss")
      ) {
        let dur = moment.duration(element.startTime.diff(this.endTimeTemp2));
        let hrs: any = dur.asHours();
        let tempData: any = {
          // emptyspace: hrs,
          emptyheight: hrs * 84.6,
        };
        this.timeLineActivity.splice(i, 0, tempData);
      }
      if (element.title) {
        let duration = moment.duration(element.endTime.diff(element.startTime));

        // duration in hours
        let hours: any = duration.asHours();
        element["hours"] = hours;
        element["height"] = hours * 84.6 - 8;

        this.endTimeTemp2 = element.endTime;
      }
    });
    let duration = moment.duration(
      this.highesttimeper2.diff(this.lowesttimeper2)
    );

    // duration in hours
    let hours: any = duration.asHours();

    for (let index = 0; index < hours; index++) {
      if (index == 0) {
        this.timeLine2.push(this.lowesttimeper2.format("hh A"));
      } else {
        let temp = this.lowesttimeper;
        this.timeLine2.push(
          this.lowesttimeper2.clone().add(index, "hours").format("hh A")
        );
      }
    }
  }
  // segmentChanged() {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddactivityComponent,
      cssClass: "addactivity-class",
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
  ChangeData(ev: any) {
    this.endTimeTemp = null;
    this.endTimeTemp2 = null;
    this.timeLine2 = [];
    this.timeLine = [];
    this.timeLineActivity = [];
    this.timeLineActivity = Object.assign([], this.activityDataArray[ev]);

    this.initCalenderActivity();
    this.timeLine = [];
    this.timeLineShifts = [];
    this.timeLineShifts = Object.assign([], this.shiftsDataArray[ev]);

    this.initCalenderShift();
  }
}
