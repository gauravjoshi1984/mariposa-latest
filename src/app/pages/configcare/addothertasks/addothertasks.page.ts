import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-addothertasks',
  templateUrl: './addothertasks.page.html',
  styleUrls: ['./addothertasks.page.scss'],
})
export class AddothertasksPage implements OnInit {

  taskForm = new FormGroup({
    taskName: new FormControl(),
    timeList: new FormControl([]),
    repeatDays: new FormControl([]),
    startDate: new FormControl("2020-05-12T13:47:20.789"),
    endDate: new FormControl("2020-05-12T13:47:20.789"),
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
    this.taskForm.patchValue({ [formname]: ev });
  }
  submit() {
    this.taskForm.patchValue({ timeList: this.timeList });
    this.taskForm.patchValue({ repeatDays: this.selectedDays });
    this.taskForm.patchValue({ images: this.imageList });
    console.log(this.taskForm.value);
  }

  addtime(ev, key){
    this.timeList = ev;
      }
}