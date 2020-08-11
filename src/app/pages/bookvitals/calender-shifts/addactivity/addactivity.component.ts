import { Component, OnInit } from "@angular/core";
import { ModalController } from '@ionic/angular';

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
  constructor(private moalCtrl:ModalController) {}

  ngOnInit() {}
  close(){
    this.moalCtrl.dismiss();

  }
}
