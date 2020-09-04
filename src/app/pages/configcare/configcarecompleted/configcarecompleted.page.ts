import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configcarecompleted',
  templateUrl: './configcarecompleted.page.html',
  styleUrls: ['./configcarecompleted.page.scss'],
})
export class ConfigcarecompletedPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  back(){
    this.navCtrl.back();
  }
}
