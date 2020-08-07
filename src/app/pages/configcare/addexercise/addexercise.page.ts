import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-addexercise',
  templateUrl: './addexercise.page.html',
  styleUrls: ['./addexercise.page.scss'],
})
export class AddexercisePage implements OnInit {

  exerciseForm = new FormGroup({
    selectType: new FormControl(""),
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
  exerciseData = [
    {
      name:"Physical Therapy",
      value:"physicaltherapy",
    },
    {
      name:"Mental Therapy",
      value:"mentaltherapy",
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
    this.exerciseForm.patchValue({ [formname]: ev });
  }
  submit() {
    this.exerciseForm.patchValue({ timeList: this.timeList });
    this.exerciseForm.patchValue({ repeatDays: this.selectedDays });
    this.exerciseForm.patchValue({ images: this.imageList });
    console.log(this.exerciseForm.value);
  }

  addtime(ev, key){
    this.timeList = ev;
      }
}