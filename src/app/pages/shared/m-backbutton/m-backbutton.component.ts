import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'm-backbutton',
  templateUrl: './m-backbutton.component.html',
  styleUrls: ['./m-backbutton.component.scss'],
})
export class MBackbuttonComponent implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  goBack() {
    this.navCtrl.back();
  }
}
