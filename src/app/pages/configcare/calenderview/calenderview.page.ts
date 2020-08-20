import { Component, OnInit } from "@angular/core";
import * as moment from 'moment';

@Component({
  selector: "app-calenderview",
  templateUrl: "./calenderview.page.html",
  styleUrls: ["./calenderview.page.scss"],
})
export class CalenderviewPage implements OnInit {
  // timeLine = [
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
  //     selected: true,
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

  // daysList = [
  //   {
  //     name: "Mon",
  //   },
  //   {
  //     name: "Tue",
  //   },
  //   {
  //     name: "Wed",
  //   },
  //   { name: "Thu" },
  //   { name: "Fri" },
  //   { name: "Sat" },
  //   { name: "Sun" },
  // ];
  // selectedDay = "Mon";
  // constructor() {}
  lowesttimeper: any;
  highesttimeper: any;
  endTimeTemp: any;
  timeLine = [];

  timeLineShifts = [

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
      startTime: moment("10:00:00 am", "HH:mm:ss a"),
      endTime: moment("12:00:00 pm", "HH:mm:ss a"),
      title: "Grooming",
      desc: "Every wednesday (beard trimming)",
    },
    {
      startDate: "",
      endDate: "",
      startTime: moment("01:00:00 pm", "HH:mm:ss a"),
      endTime: moment("02:00:00 pm", "HH:mm:ss a"),
      title: "Lunch",
      desc: "Less sugar food is prescribed by the Dr.",
    },
    {
      startDate: "",
      endDate: "",
      startTime: moment("04:00:00 pm", "HH:mm:ss a"),
      endTime: moment("05:00:00 pm", "HH:mm:ss a"),
      title: "Exercise",
          desc: "Therapy will be needed for muscle...",
    },
];

  ngOnInit() {
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
        element["height"] = (hours * 84.6)-8;
  
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
  // selectChip(item) {
  //   this.selectedDay = item.name;
  //   this.timeLine.forEach(element => {
  //     if(element.name){
  //       element.card=!element.card
  //     }
      
  //   });
  // }


  
 




}
