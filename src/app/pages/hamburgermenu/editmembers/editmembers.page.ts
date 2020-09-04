import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DeleteconfirmComponent } from "./deleteconfirm/deleteconfirm.component";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-editmembers',
  templateUrl: './editmembers.page.html',
  styleUrls: ['./editmembers.page.scss'],
})
export class EditmembersPage implements OnInit {

  senior = 'David';
  isAdmin = false;

  memberdetails = [
    {
      membername : 'David',
      memberrelation : 'Father',
      memberrank : 'SENIOR',
      details : '70 Years Old, Male, lives with',
    },
    {
      membername : 'David',
      memberrelation : 'Father',
      memberrank : 'ADMIN',
      details : '70 Years Old, Male, lives with',
    }
];


  constructor(private navCtrl: NavController,private modalController: ModalController) { }

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
  back(){
    this.navCtrl.back();
  }

}
