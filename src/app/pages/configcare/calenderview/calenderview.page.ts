import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calenderview",
  templateUrl: "./calenderview.page.html",
  styleUrls: ["./calenderview.page.scss"],
})
export class CalenderviewPage implements OnInit {
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
    },
    {
      name: "Tue",
    },
    {
      name: "Wed",
    },
    { name: "Thu" },
    { name: "Fri" },
    { name: "Sat" },
    { name: "Sun" },
  ];
  selectedDay = "Mon";
  constructor() {}

  ngOnInit() {}
  selectChip(item) {
    this.selectedDay = item.name;
    this.timeLine.forEach(element => {
      if(element.name){
        element.card=!element.card
      }
      
    });
  }
}
