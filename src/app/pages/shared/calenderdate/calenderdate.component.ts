import { Component, OnInit, Input } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-calenderdate",
  templateUrl: "./calenderdate.component.html",
  styleUrls: ["./calenderdate.component.scss"],
})
export class CalenderdateComponent implements OnInit {
  @Input() showMonth: boolean;
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
  monthVar: any;
  constructor() {}

  ngOnInit() {
    // this.getMonthArray();
    this.today = moment().minute(0).hour(0).second(0);
    this.monthVar = moment().format("MMM");
    console.log(
      "CalenderdateComponent -> ngOnInit -> this.monthVar",
      this.monthVar
    );
    this.getWeekDays();
  }
  getWeekDays() {
    const from_date = moment().startOf("isoWeek");
    const to_date = moment().endOf("isoWeek");

    this.dates = [];
    // this.dates.push({
    //   date: from_date.clone().toDate(),
    //   diff: moment().diff(from_date.clone().toDate(), "days"),
    // });

    do {
      let future = moment().subtract(1, "days").isBefore(from_date);
      let x = {
        date: from_date.clone().toDate(),
        futvar: future,
        selected: false,
      };
      if (this.today.isSame(from_date, "day")) {
        x.selected = true;
      }

      this.dates.push(x);
    } while (from_date.add(1, "days").diff(to_date) <= 0);
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
    return moment().diff(item);
  }
  selectDay(item) {
    this.today = moment(item.date);
    this.getWeekDays();
  }
}
