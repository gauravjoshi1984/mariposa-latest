import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-medication",
  templateUrl: "./medication.page.html",
  styleUrls: ["./medication.page.scss"],
})
export class MedicationPage implements OnInit {
  type: string = "all";

  constructor() {}

  medtable = [
    {
      name: "Ibuprofile MKal",
      dosage: "2",
      timing: ["9:00 am", "10:00 pm"],
      notes: "Medicine should be taken with warm water",
    },
  ];

  medalltable = [
    {
      name: "Ibuprofile MKal",
      dosage: "2",
      timing: ["9:00 am", "10:00 pm"],
      notes: "Medicine should be taken with warm water",
    },
    {
      name: "Aspirin",
      dosage: "2",
      timing: ["8:00 am", "12:00 pm"],
      notes: "Medicine should be taken before meals",
    },
  ];

  ngOnInit() {}

  segmentChanged(ev: any) {
    console.log("Segment changed", ev);
  }
}
