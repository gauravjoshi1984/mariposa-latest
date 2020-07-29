import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homeandsafety',
  templateUrl: './homeandsafety.page.html',
  styleUrls: ['./homeandsafety.page.scss'],
})
export class HomeandsafetyPage implements OnInit {

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

  generateClick2(ev: any,value) {
    ev.value=value;
   
   console.log(ev);
 }

}
