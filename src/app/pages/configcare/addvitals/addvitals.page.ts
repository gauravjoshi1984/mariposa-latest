import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-addvitals',
  templateUrl: './addvitals.page.html',
  styleUrls: ['./addvitals.page.scss'],
})
export class AddvitalsPage implements OnInit {

  vitalForm = new FormGroup({
    vitalType: new FormControl(""),
    timeList: new FormControl([]),
    repeatDays: new FormControl([]),
    instructions: new FormControl(""),
    images: new FormControl([]),
  });



  timeList = [];
  customPickerOptions: any;
  timeindex: number;
  instructions = "";
  imageList = [];

  vitalData = [
    {
      name:"Blood Pressure",
      value:"bloodpressure",
    },
    {
      name:"Pulse",
      value:"pulse",
    },
  ]
  daysList = [
    {
      name: "s",
      value: "Sunday",
    },
    {
      name: "m",
      value: "Monday",
    },
    {
      name: "t",
      value: "Tuesday",
    },
    {
      name: "w",
      value: "Wednesday",
    },
    {
      name: "t",
      value: "Thursday",
    },
    {
      name: "f",
      value: "Friday",
    },
    {
      name: "s",
      value: "Saturday",
    },
  ];
  selectedDays = [];
  constructor() {
   
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit(): void {
    this.addDate();
  }
  addDate() {
    this.timeList.push(new Date());
  }
  
  
  addremoveDay(item) {
    if (this.selectedDays.includes(item.value)) {
      let index = this.selectedDays.indexOf(item.value);
      this.selectedDays.splice(index, 1);
    } else {
      this.selectedDays.push(item.value);
    }
  }

  setData(ev: any, formname) {
    console.log(ev, "|||||");
    this.vitalForm.patchValue({ [formname]: ev });
  }
  submit() {
    this.vitalForm.patchValue({ timeList: this.timeList });
    this.vitalForm.patchValue({ repeatDays: this.selectedDays });
    this.vitalForm.patchValue({ images: this.imageList });
    console.log(this.vitalForm.value);
  }

  addtime(ev, key){
    this.timeList = ev;
      }
}
