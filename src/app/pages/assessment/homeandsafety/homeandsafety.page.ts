import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homeandsafety',
  templateUrl: './homeandsafety.page.html',
  styleUrls: ['./homeandsafety.page.scss'],
})
export class HomeandsafetyPage implements OnInit {

  stateObject: any = {};
  careCircleId;
  userId;
  key: string;
  homeForm: any = {aids: {}, other: {}};

  constructor(private navCtrl: NavController, ) { }

  ngOnInit() {
  }

  save(){
    this.navCtrl.back();
  }


  generateClick(ev: any) {
    // ev.click();
    if (ev.checked == true) {
      ev.checked = false;
    } else {
      ev.checked = true;
    }
  }

  generateClick2(ev: any, value) {
    ev.value = value;
 }

}
