import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-schedulegardening',
  templateUrl: './schedulegardening.page.html',
  styleUrls: ['./schedulegardening.page.scss'],
})
export class SchedulegardeningPage implements OnInit {

  gardeningForm = new FormGroup({
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

  constructor() { }

  ngOnInit() {
  }

  addtime(ev, key){
    this.timeList = ev;
  }

  addremoveDay(item) {
    if (this.selectedDays.includes(item.value)) {
      let index = this.selectedDays.indexOf(item.value);
      this.selectedDays.splice(index, 1);
    } else {
      this.selectedDays.push(item.value);
    }
  }

  submit() {
    this.gardeningForm.patchValue({ timeList: this.timeList });
    this.gardeningForm.patchValue({ repeatDays: this.selectedDays });
    this.gardeningForm.patchValue({ images: this.imageList });
    console.log(this.gardeningForm.value);
  }

      

}