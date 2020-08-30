import { Component, OnInit } from "@angular/core";
import { DeleteconfirmComponent } from "./deleteconfirm/deleteconfirm.component";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-editmembers",
  templateUrl: "./editmembers.page.html",
  styleUrls: ["./editmembers.page.scss"],
})
export class EditmembersPage implements OnInit {
  senior = "David";
  isAdmin = false;

  memberdetails = [
    {
      membername: "David",
      memberrelation: "Father",
      memberrank: "SENIOR",
      details: "70 Years Old, Male, lives with",
    },
    {
      membername: "Mary Arthur",
      memberrelation: "Caregiver",
      memberrank: "ADMIN",
      details: "40 Years Old, Female, lives in LA...",
    },
  ];

  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: DeleteconfirmComponent,
      cssClass: "deletemodalclass",
      componentProps: { careCircleName: "David" },
      backdropDismiss: true,
    });
    modal.onDidDismiss().then((response) => {
      if (response.data === "delete") {
        // this.deleteAssessment();
      }
    });
    return await modal.present();
  }
}
