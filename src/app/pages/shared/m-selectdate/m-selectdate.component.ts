import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from "@angular/core";
import { IonDatetime } from "@ionic/angular";

@Component({
  selector: "m-selectdate",
  templateUrl: "./m-selectdate.component.html",
  styleUrls: ["./m-selectdate.component.scss"],
})
export class MSelectdateComponent implements OnInit {
  @ViewChild("datepicker") datepicker: IonDatetime;
  @Output() result = new EventEmitter<[]>();

  timeList: any = [];
  timeindex: number;

  customPickerOptions: any;
  constructor() {
    this.customPickerOptions = {
      buttons: [
        {
          text: "Submit",
          handler: (x) => {
            console.log("Clicked Save!", x);
            if (this.timeList[this.timeindex]) {
              let dateVar = new Date();
              dateVar.setHours(
                x.ampm.value == "pm" ? x.hour.value + 12 : x.hour.value
              );
              dateVar.setMinutes(x.minute.value);
              this.timeList[this.timeindex] = dateVar;

              console.log(this.timeList[this.timeindex]);
              this.result.emit(this.timeList);
            }
          },
        },
      ],
    };
  }

  ngOnInit() {
    this.addDate();
    
  }
  addDate() {
    this.timeList.push(new Date());
    this.result.emit(this.timeList);
  }
  getTimeHR(hr) {
    return ("0" + hr).slice(-2);
  }
  getMinFormat(min) {
    return (min < 10 ? "0" : "") + min;
  }
  changeTime(i) {
    this.datepicker.open().then((x) => {
      console.log(x);
      this.timeindex = i;
    });
  }
  deleteTime(i) {
    this.timeList.splice(i, 1);
  }
}
