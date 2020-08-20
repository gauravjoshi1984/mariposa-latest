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
  segValue = "shifts";
  lowesttimeper: any;
  highesttimeper: any;
  timeLine = [];
  lowesttimeper2: any;
  highesttimeper2: any;
  timeLine2 = [];
  // timeLine2 = [
  //   {
  //     name: "Wake Up",
  //     desc: "message or instructions will be shown here",
  //     card: true,
  //     selected: false,
  //     time: "7 AM",
  //   },
  //   {
  //     name: "Bathing",
  //     desc: "message or instructions will be shown here",
  //     card: true,
  //     selected: false,
  //     time: "8 AM",
  //   },
  //   {
  //     name: "Medication: Ibuprofine MKal",
  //     desc: "Dosage: 1 with warm water, Daily",
  //     card: true,
  //     selected: false,
  //     time: "9 AM",
  //   },
  //   {
  //     name: "",
  //     desc: "",
  //     card: false,
  //     selected: false,
  //     time: "10 AM",
  //   },
  //   {
  //     name: "Grooming",
  //     desc: "Every wednesday (beard trimming)",
  //     card: true,
  //     selected: false,
  //     time: "11 AM",
  //   },
  //   {
  //     name: "",
  //     desc: "",
  //     card: false,
  //     selected: false,
  //     time: "12 PM",
  //   },
  //   {
  //     name: "Lunch",
  //     desc: "Less sugar food is prescribed by the Dr.",
  //     card: true,
  //     selected: false,
  //     time: "01 PM",
  //   },
  //   {
  //     name: "",
  //     desc: "",
  //     card: false,
  //     selected: false,
  //     time: "02 PM",
  //   },
  //   {
  //     name: "",
  //     desc: "",
  //     card: false,
  //     selected: false,
  //     time: "03 PM",
  //   },
  //   {
  //     name: "Exercise",
  //     desc: "Therapy will be needed for muscle...",
  //     card: true,
  //     selected: false,
  //     time: "04 PM",
  //   },
  //   {
  //     name: "",
  //     desc: "",
  //     card: false,
  //     selected: false,
  //     time: "05 PM",
  //   },
  //   {
  //     name: "",
  //     desc: "",
  //     card: false,
  //     selected: false,
  //     time: "06 PM",
  //   },
  // ];
  timeLineShifts = [
    {
      startDate: "",
      endDate: "",
      startTime: moment("08:00:00 am", "HH:mm:ss a"),
      endTime: moment("01:00:00 pm", "HH:mm:ss a"),
      title: "Mary",
    },
    {
      startDate: "",
      endDate: "",
      startTime: moment("02:00:00 pm", "HH:mm:ss a"),
      endTime: moment("03:00:00 pm", "HH:mm:ss a"),
      title: "Mary",
    },
  ];

  timeLineActivity = [
    {
      startDate: "",
      endDate: "",
      startTime: moment("07:00:00 am", "HH:mm:ss a"),
      endTime: moment("08:00:00 pm", "HH:mm:ss a"),
      title: "Wake Up",
      desc: "message or instructions will be shown here",
    },
    {
      startDate: "",
      endDate: "",
      startTime: moment("08:00:00 pm", "HH:mm:ss a"),
      endTime: moment("09:00:00 pm", "HH:mm:ss a"),
      title: "Bathing",
      desc: "message or instructions will be shown here",
    },
    {
      startDate: "",
      endDate: "",
      startTime: moment("11:00:00 am", "HH:mm:ss a"),
      endTime: moment("12:00:00 pm", "HH:mm:ss a"),
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
    {
      startDate: "",
      endDate: "",
      startTime: moment("01:00:00 pm", "HH:mm:ss a"),
      endTime: moment("02:00:00 pm", "HH:mm:ss a"),
      title: "Lunch",
      desc: "Every wednesday (beard trimming)",
    },
  ];
  timeLineData = [];

  selectedDay = "Mon";
  endTimeTemp: any;
  endTimeTemp2: any;
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.timeLineData = this.timeLineActivity;
    this.initCalenderShift();
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
          emptyheight: hrs * 85,
        };
        this.timeLineShifts.splice(i, 0, tempData);
      }
      if (element.title) {
        let duration = moment.duration(element.endTime.diff(element.startTime));

        // duration in hours
        let hours: any = duration.asHours();
        element["hours"] = hours;
        element["height"] = hours * 85;

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
          emptyheight: hrs * 85,
        };
        this.timeLineActivity.splice(i, 0, tempData);
      }
      if (element.title) {
        let duration = moment.duration(element.endTime.diff(element.startTime));

        // duration in hours
        let hours: any = duration.asHours();
        element["hours"] = hours;
        element["height"] = hours * 85;

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
}
