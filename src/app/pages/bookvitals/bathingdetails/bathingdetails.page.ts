import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../assessment/assessmentbar/popover/popover.component';
import { DltbathingpopoverComponent } from './dltbathingpopover/dltbathingpopover.component';

@Component({
  selector: 'app-bathingdetails',
  templateUrl: './bathingdetails.page.html',
  styleUrls: ['./bathingdetails.page.scss'],
})
export class BathingdetailsPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async deletebathing(ev: any) {
    const popover = await this.popoverController.create({
      component: DltbathingpopoverComponent,
      cssClass: "popoverstyle",
      event: ev,
      translucent: true,
      mode: "ios",
    });

    // popover.onDidDismiss().then((x) => {
    //   if (x.data == "delete") {
    //     this.presentModal();
    //   }
    // });
    return await popover.present();
  }


}
