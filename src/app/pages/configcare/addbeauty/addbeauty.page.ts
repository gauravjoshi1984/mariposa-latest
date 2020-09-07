import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addbeauty',
  templateUrl: './addbeauty.page.html',
  styleUrls: ['./addbeauty.page.scss'],
})
export class AddbeautyPage implements OnInit {

  beautyForm = new FormGroup({
    groomingType: new FormControl(''),
    timeList: new FormControl([]),
    repeatDays: new FormControl([]),
    instructions: new FormControl(''),
    images: new FormControl([]),
  });

  timeList = [];
  customPickerOptions: any;
  timeindex: number;
  instructions = '';
  imageList = [];
  groomingData = [
    {
      name:'Hair cut',
      value:'haircut'
    },
    {
      name:'Shave',
      value:'shave'
    },
    {
      name:'Massage',
      value:'massage',
    },
  ];
  daysList = [
    {
      name: 's',
      value: 'Sunday',
    },
    {
      name: 'm',
      value: 'Monday',
    },
    {
      name: 't',
      value: 'Tuesday',
    },
    {
      name: 'w',
      value: 'Wednesday',
    },
    {
      name: 't',
      value: 'Thursday',
    },
    {
      name: 'f',
      value: 'Friday',
    },
    {
      name: 's',
      value: 'Saturday',
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
      const index = this.selectedDays.indexOf(item.value);
      this.selectedDays.splice(index, 1);
    } else {
      this.selectedDays.push(item.value);
    }
  }
  setData(ev: any, formname) {
    this.beautyForm.patchValue({ [formname]: ev });
  }
  submit() {
    this.beautyForm.patchValue({ timeList: this.timeList });
    this.beautyForm.patchValue({ repeatDays: this.selectedDays });
    this.beautyForm.patchValue({ images: this.imageList });
  }

  addtime(ev, key){
    this.timeList = ev;
      }
}
