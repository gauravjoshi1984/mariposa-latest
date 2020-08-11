import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-addmeals',
  templateUrl: './addmeals.page.html',
  styleUrls: ['./addmeals.page.scss'],
})
export class AddmealsPage implements OnInit {

  mealForm = new FormGroup({
    mealType: new FormControl(""),
    timeList: new FormControl([]),
    frequency: new FormControl(""),
    favbreakfast: new FormControl(""),
    repeatDays: new FormControl([]),
    instructions: new FormControl(""),
    images: new FormControl([]),
  });

  timeList = [];
  customPickerOptions: any;
  timeindex: number;
  instructions = "";
  imageList = [];
  mealData = [
      {
        name:"Breakfast",
        value:"breakfast"
      },
      {
        name:"Lunch",
        value:"lunch"
      },
      {
        name:"Dinner",
        value:"dinner"
      },
      {
        name:"Snack",
        value:"snack"
      },
  ]
  frequencyData = [
    {
      name:"Once",
      value:"1"
    },
    {
      name:"Twice",
      value:"2"
    },
    {
      name:"Thrice",
      value:"3"
    },
]

breakfastData = [
  {
    name:"Peanut butter with jam",
    value:"Peanut butter with jam"
  },
  {
    name:"Pancakes",
    value:"pancakes",
  },
  {
    name:"Boiled Eggs",
    value:"boiled eggs"
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
    this.mealForm.patchValue({ [formname]: ev });
  }


  submit() {
    this.mealForm.patchValue({ timeList: this.timeList });
    this.mealForm.patchValue({ repeatDays: this.selectedDays });
    this.mealForm.patchValue({ images: this.imageList });
    console.log(this.mealForm.value);
  }

  addtime(ev, key){
    this.timeList = ev;
      }
}