import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-m-header-close',
  templateUrl: './m-header-close.component.html',
  styleUrls: ['./m-header-close.component.scss'],
})
export class MHeaderCloseComponent implements OnInit {
  @Input() title;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  back(){
    this.navCtrl.back();
  }
}
