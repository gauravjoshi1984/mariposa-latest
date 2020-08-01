import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calender-shifts",
  templateUrl: "./calender-shifts.page.html",
  styleUrls: ["./calender-shifts.page.scss"],
})
export class CalenderShiftsPage implements OnInit {
  timeLine = [
    {
      name: "Bathing",
      desc: "message or instructions will be shown here",
      card: true,
      selected: false,
      time: "8 AM",
    },
    {
      name: "Medication: Ibuprofine MKal",
      desc: "Dosage: 1 with warm water, Daily",
      card: true,
      selected: false,
      time: "9 AM",
    },
    {
      name: "",
      desc: "",
      card: false,
      selected: false,
      time: "10 AM",
    },
    {
      name: "Grooming",
      desc: "Every wednesday (beard trimming)",
      card: true,
      selected: true,
      time: "11 AM",
    },
    {
      name: "",
      desc: "",
      card: false,
      selected: false,
      time: "12 PM",
    },
    {
      name: "Lunch",
      desc: "Less sugar food is prescribed by the Dr.",
      card: true,
      selected: false,
      time: "01 PM",
    },
    {
      name: "",
      desc: "",
      card: false,
      selected: false,
      time: "02 PM",
    },
    {
      name: "",
      desc: "",
      card: false,
      selected: false,
      time: "03 PM",
    },
    {
      name: "Exercise",
      desc: "Therapy will be needed for muscle...",
      card: true,
      selected: false,
      time: "04 PM",
    },
    {
      name: "",
      desc: "",
      card: false,
      selected: false,
      time: "05 PM",
    },
    {
      name: "",
      desc: "",
      card: false,
      selected: false,
      time: "06 PM",
    },
  ];

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
  selectedDay = "Mon";
  constructor() {}

  ngOnInit() {}
}
