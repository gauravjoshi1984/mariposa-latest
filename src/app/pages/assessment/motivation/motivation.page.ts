import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.page.html',
  styleUrls: ['./motivation.page.scss'],
})
export class MotivationPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  save(){
    this.navCtrl.navigateForward(['/assessment/assessmentbar']);
  }

  generateClick(ev: any) {
    // ev.click();
    if (ev.checked == true) {
      ev.checked = false;
    } else {
      ev.checked = true;
    }
    console.log(ev.checked);
  }

}
