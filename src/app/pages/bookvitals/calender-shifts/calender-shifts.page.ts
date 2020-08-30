import { Component, OnInit } from "@angular/core";
import { ModalController, PopoverController } from "@ionic/angular";
import { AddactivityComponent } from "./addactivity/addactivity.component";
import * as moment from "moment";
import { DetailComponent } from "./detail/detail.component";
import { ProfilelistComponent } from "../profilelist/profilelist.component";

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
    24: [
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
    25: [
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
    26: [
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
    27: [
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
    28: [
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
    29: [
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
    30: [
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
    24: [
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
    25: [
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
    26: [
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
    27: [
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
    28: [
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
    29: [
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
    30: [
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
  constructor(
    private modalController: ModalController,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {}
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddactivityComponent,
      cssClass: "addactivity-class",
    });
    return await modal.present();
  }
  async opendetailComponent(item) {
    const modal = await this.modalController.create({
      component: DetailComponent,
      cssClass: "detailcomp-class",
      componentProps: { data: item },
    });
    return await modal.present();
  }
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
}
