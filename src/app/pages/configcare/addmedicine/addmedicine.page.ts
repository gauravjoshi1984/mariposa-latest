import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.page.html',
  styleUrls: ['./addmedicine.page.scss'],
})
export class AddmedicinePage implements OnInit {
  medicineForm = new FormGroup({
    medicineType: new FormControl(''),
    medicineName: new FormControl(),
    timeList: new FormControl([]),
    repeatDays: new FormControl([]),
    dosage: new FormControl(''),
    startDate: new FormControl('2020-04-12T13:47:20.789'),
    endDate: new FormControl('2020-05-12T13:47:20.789'),
    instructions: new FormControl(''),
    images: new FormControl([]),
  });
  timeList = [];
  initialTimeList = [];
  customPickerOptions: any;
  timeindex: number;
  instructions = '';
  imageList = [];
  selectData = [
    {
      value: 'yes',
      name: 'Yes',
    },
    {
      value: 'no',
      name: 'NO',
    },
  ];
  selectData2 = [
    {
      value: '1',
      name: '1',
    },
    {
      value: '2',
      name: '2',
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
    const date = new Date();
    this.initialTimeList.push({hours: date.getHours(), minutes: date.getMinutes()});
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
    this.medicineForm.patchValue({ [formname]: ev });
  }
  submit() {
    this.medicineForm.patchValue({ timeList: this.timeList });
    this.medicineForm.patchValue({ repeatDays: this.selectedDays });
    this.medicineForm.patchValue({ images: this.imageList });
    console.log(this.medicineForm.value);
  }

  addtime(ev, key){
    this.timeList = ev;
  }
}
