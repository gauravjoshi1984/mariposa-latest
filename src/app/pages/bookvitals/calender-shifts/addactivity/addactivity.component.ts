import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-addactivity",
  templateUrl: "./addactivity.component.html",
  styleUrls: ["./addactivity.component.scss"],
})
export class AddactivityComponent implements OnInit {
  listItems = [
    {
      name: "bathing",
    },
    {
      name: "Medication",
    },
    {
      name: "Meals",
    },
    {
      name: "Groomimg",
    },
    {
      name: "Check Vitals",
    },
    { name: "Shopping" },
    { name: "Other Tasks" },
  ];
  constructor() {}

  ngOnInit() {}
}
