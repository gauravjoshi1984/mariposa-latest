import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'm-selectdate',
  templateUrl: './m-selectdate.component.html',
  styleUrls: ['./m-selectdate.component.scss'],
})
export class MSelectdateComponent implements OnInit {
  @ViewChild('datepicker') datepicker: IonDatetime;
  @Output() result = new EventEmitter<[]>();
  @Input() times;
  timeList: any = [];
  timeindex: number;

  customPickerOptions: any;
  constructor() {
    this.customPickerOptions = {
      buttons: [
        {
          text: 'Submit',
          handler: (x) => {
            if (this.timeList[this.timeindex]) {
              const dateVar = new Date();
              dateVar.setHours(
                x.ampm.value === 'pm' ? (x.hour.value !== 12 ? x.hour.value + 12 : 12) : (x.hour.value === 12 ? 0 : x.hour.value)
              );
              dateVar.setMinutes(x.minute.value);
              this.timeList[this.timeindex] = {hours: dateVar.getHours(), minutes: dateVar.getMinutes()};
              this.result.emit(this.timeList);
            }
          },
        },
      ],
    };
  }

  ngOnInit() {
    if (this.times.length > 0){
      this.times.forEach(time => {
        this.addDate(time);
      });
    }
    else{
      this.addDate({});
    }
  }
  addDate(time: any) {
    if (time.hasOwnProperty('hours')){
      this.timeList.push({hours: time.hours, minutes: time.minutes});
    }
    else{
      const date = new Date();
      this.timeList.push({hours: date.getHours(), minutes: date.getMinutes()});
    }
    this.result.emit(this.timeList);
  }
  getTimeHR(hr) {
    hr = hr % 12;
    hr = hr === 0 ? 12 : hr;
    return ('0' + hr).slice(-2);
  }
  getMinFormat(min) {
    return (min < 10 ? '0' : '') + min;
  }
  changeTime(i) {
    this.datepicker.open().then((x) => {
      this.timeindex = i;
    });
  }
  deleteTime(i) {
    this.timeList.splice(i, 1);
  }
}
