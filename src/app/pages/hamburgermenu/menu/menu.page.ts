import { Component, OnInit } from "@angular/core";
import { ProfilelistComponent } from "../../bookvitals/profilelist/profilelist.component";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  visible = true;

  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {}
  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ProfilelistComponent,
      cssClass: "popoverstylepl",
      event: ev,
      translucent: true,
      mode: "ios",
    });
    popover.onDidDismiss().then((x) => {
      // if (x.data === "delete") {
      // }
    });
    return await popover.present();
  }
}
