import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-addvital',
  templateUrl: './addvital.component.html',
  styleUrls: ['./addvital.component.scss'],
})
export class AddvitalComponent implements OnInit {
  @Input() item: any;
  value: any = {};
  selectedTime;
  currentDate = moment().format('YYYY-MM-DD');
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  submit() {
    this.modalCtrl.dismiss({selectedTime: this.selectedTime, value: this.value});
  }
  dismiss() {
    this.modalCtrl.dismiss({});
  }
  getTime(time){
    let hour, ampm;
    if (time.hours === 0) {
      hour = 12;
      ampm = 'AM';
    }
    else{
      hour = time.hours % 12;
      ampm = time.hours >= 12 ? 'PM' : 'AM';
    }
    return `${hour}:${time.minutes} ${ampm}`;
  }
}
