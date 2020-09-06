import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.component.html',
  styleUrls: ['./addactivity.component.scss'],
})
export class AddactivityComponent implements OnInit {
  listItems = [
    { name: 'Add Activity', type: 'activity'},
    { name: 'Add Shopping', type: 'shopping' },
    { name: 'Add Appointment', type: 'appointment' },
  ];
  constructor(
    private moalCtrl: ModalController,
    private navCtrl: NavController) {}

  ngOnInit() {}
  close(){
    this.moalCtrl.dismiss();
  }
  addActivity(type){
    this.moalCtrl.dismiss();
    switch (type){
      case 'activity': {
        this.navCtrl.navigateForward('/addactivity');
        break;
      }
      case 'shopping': {
        this.navCtrl.navigateForward('/configcare/assignshoppinglist');
        break;
      }
      case 'appointment': {
        this.navCtrl.navigateForward('/bookvitals/addappointment');
        break;
      }
    }
  }
}
