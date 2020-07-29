import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-configurecarebar",
  templateUrl: "./configurecarebar.page.html",
  styleUrls: ["./configurecarebar.page.scss"],
})
export class ConfigurecarebarPage {
  stepperData: any = [
    {
      name: "Bathing",
      desc: "Scheduled Time: 6 am",
      desc2: "Repeat: Sun, Tue, Thu, Sat",
      open: false,
      status: "completed",
      pathUrl: "bathing",
    },

    {
      name: "Medication",
      desc: "Scheduled Time: 6 am",
      desc2: "Repeat: Sun, Tue, Thu, Sat",
      open: false,
      status: "completed",
      pathUrl: "addmedicine",
    },
    {
      name: "Meals",
      desc: "Scheduled Time: 6 am",
      desc2: "Repeat: Sun, Tue, Thu, Sat",
      open: false,
      status: "completed",
      pathUrl: "addmeals",
    },
    {
      name: "Beauty & Grooming",
      open: true,
      status: "active",
      pathUrl: "addbeauty",
    },
    {
      name: "Check Vitals",
      open: false,
      status: "pending",
      pathUrl: "addvitals",
    },
    {
      name: "Excercise / Physical Therapy",
      open: false,
      status: "pending",
      pathUrl: "addexercise",
    },

    {
      name: "Shopping List",
      open: false,
      status: "pending",
      pathUrl: "assignshoppinglist",
    },
    {
      name: "Other Tasks",
      open: false,
      status: "pending",
      pathUrl: "addothertasks",
    },
  ];
  constructor(private navCtr: NavController) {}

  ngOnInit() {}
  changeStepper(item) {
    console.log("+");
    this.stepperData.forEach((element) => {
      element.open = false;
      element.status = "pending";
      if (element.name == item.name) {
        element.status = "active";
        element.open = true;
      }
    });
  }
  gotoUrl(path) {
    this.navCtr.navigateForward(["/configcare/" + path]);
  }
}
