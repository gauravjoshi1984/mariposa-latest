import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { Router } from '@angular/router';
import { ModalController , PopoverController } from '@ionic/angular';
import { ProfilelistComponent } from '../../bookvitals/profilelist/profilelist.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

 visible = true;

  constructor(
    private dataService: DataserviceService,
    private router: Router,
    private modalCtrl: ModalController, private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }
  logout(){
    this.dataService.setUserInfo(null);
    this.dataService.setAuthTokens(null);
    this.router.navigateByUrl('/admin-sign-in');
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ProfilelistComponent,
      cssClass: 'popoverstylepl',
      event: ev,
      translucent: true,
      mode: 'ios',
    });
    popover.onDidDismiss().then((x) => {
      // if (x.data === "delete") {
      // }
    });
    return await popover.present();
  }

}
