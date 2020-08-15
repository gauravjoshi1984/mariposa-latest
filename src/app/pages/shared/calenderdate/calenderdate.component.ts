import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  ngOnInit() {
    this.getMonthArray();
    this.today = new Date();
    console.log(this.today);
    this.selectedMonth = this.today.toLocaleString("default", {
      month: "numeric",
    });
    this.selectedDay = this.today.toLocaleString("default", {
      day: "numeric",
    });
    let todayMonth = this.today.getMonth();
    let todayYear = this.today.getFullYear();
    let dayCount = this.daysInMonth(todayMonth, todayYear);
    this.getDays(
      dayCount,
      parseInt(this.selectedMonth) - 1,
      this.today.getFullYear()
    );
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
}
