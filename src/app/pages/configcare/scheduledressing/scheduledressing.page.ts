import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-scheduledressing',
  templateUrl: './scheduledressing.page.html',
  styleUrls: ['./scheduledressing.page.scss'],
})
export class ScheduledressingPage implements OnInit {

  dressingForm = new FormGroup({
    timeList: new FormControl([]),
    outfitType: new FormControl(""),
    repeatDays: new FormControl([]),
    instructions: new FormControl(""),
    images: new FormControl([]),
  });


  timeList = [];
  customPickerOptions: any;
  timeindex: number;
  instructions = "";
  imageList = [];

  outfitData = [
    {
      name:"Jeans",
      value:"jeans"
    },
    {
      name:"Polka Pants",
      value:"Polkapants"
    },
    {
      name:"Cotton Pyjama",
      value:"cottonpyjama"
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
    this.dressingForm.patchValue({ timeList: this.timeList });
    this.dressingForm.patchValue({ repeatDays: this.selectedDays });
    this.dressingForm.patchValue({ images: this.imageList });
    console.log(this.dressingForm.value);
  }

  setData(ev: any, formname) {
    console.log(ev, "|||||");
    this.dressingForm.patchValue({ [formname]: ev });
  }

}
