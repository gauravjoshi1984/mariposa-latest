import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-calenderdate",
  templateUrl: "./calenderdate.component.html",
  styleUrls: ["./calenderdate.component.scss"],
})
export class CalenderdateComponent implements OnInit {
  daysList = [
    {
      name: "Mon",
      date: "11",
      status: "disable",
    },
    {
      name: "Tue",
      date: "12",
      status: "disable",
    },
    {
      name: "Wed",
      date: "13",
      status: "selected",
    },
    { name: "Thu", date: "14", status: "active" },
    { name: "Fri", date: "15", status: "active" },
    { name: "Sat", date: "16", status: "active" },
    { name: "Sun", date: "17", status: "active" },
  ];
  today: any;
  monthList: any = [];
  selectedMonth = "";
  // daysList:any=[];
  selectedDay: any;
  dates: any = [];
  constructor() {}

  ngOnInit() {
    this.getMonthArray();
    this.today = moment().isoWeekday(1);

    // let begin = moment(this.today).isoWeekday(1);
    // let begin = moment(today).isoWeekday(1);
    // begin.startOf("isoWeek");
    // moment().startOf("isoWeek");

    // console.log(this.today);
    // this.selectedMonth = this.today.toLocaleString("default", {
    //   month: "numeric",
    // });
    // this.selectedDay = this.today.toLocaleString("default", {
    //   day: "numeric",
    // });
    // let todayMonth = this.today.getMonth();
    // let todayYear = this.today.getFullYear();
    // let dayCount = this.daysInMonth(todayMonth, todayYear);
    // this.getDays(
    //   dayCount,
    //   parseInt(this.selectedMonth) - 1,
    //   this.today.getFullYear()
    // );

    const from_date = moment().startOf("isoWeek");
    const to_date = moment().endOf("isoWeek");
    console.log({
      from_date: from_date.toString(),
      today: moment().toString(),
      to_date: to_date.toString(),
    });
    this.dates = [];
    let dates = [];
    this.dates.push({
      date: from_date.clone().toDate(),
      diff: moment().diff(from_date.clone().toDate(), "days"),
    });

    while (from_date.add(1, "days").diff(to_date) < 0) {
      console.log(from_date.toDate());
      let diff = moment().diff(from_date.clone().toDate(), "days");
      if (diff == 0) {
        if (moment().isSame(from_date.clone().toDate(), "day")) {
          diff = 0;
        } else {
          diff = -1;
        }
      }
      this.dates.push({
        date: from_date.clone().toDate(),
        diff: diff,
      });
    }

    console.log(this.dates);
  }
  changeMonth() {
    let dayCount = this.daysInMonth(
      this.selectedMonth,
      this.today.getFullYear()
    );
    this.getDays(
      dayCount,
      parseInt(this.selectedMonth) - 1,
      this.today.getFullYear()
    );
  }
  getDays(dayCount, month, year) {
    console.log(this.selectedDay, month, year);
    for (let index = 1; index <= dayCount; index++) {
      let date = new Date(year, month, index);
    }
  }
  getMonthArray() {
    this.monthList = [];
    const months = Array.from({ length: 12 }, (e, i) => {
      let datetemp = new Date(null, i + 1, null);
      let temp = {
        shortname: datetemp.toLocaleDateString("en", {
          month: "short",
        }),
        monthnum: datetemp.toLocaleDateString("en", {
          month: "numeric",
        }),
      };
      this.monthList.push(temp);
    });
  }
  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  checkDate(item) {
    console.log(moment().diff(item));
    return moment().diff(item);
  }
}
