import { Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-bathing',
  templateUrl: './bathing.page.html',
  styleUrls: ['./bathing.page.scss'],
})
export class BathingPage {
  @ViewChild('datepicker') datepicker: IonDatetime;

  bathingForm = new FormGroup({
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
    this.customPickerOptions = {
      buttons: [
        {
          text: 'Submit',
          handler: (x) => {
            console.log('Clicked Save!', x);
            if (this.timeList[this.timeindex]) {
              const dateVar = new Date();
              dateVar.setHours(
                x.ampm.value == 'pm' ? x.hour.value + 12 : x.hour.value
              );
              dateVar.setMinutes(x.minute.value);
              this.timeList[this.timeindex] = dateVar;

              console.log(this.timeList[this.timeindex]);
            }
          },
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
            // return false;
            this.timeList.splice(this.timeindex, 1);
          },
        },
      ],
    };
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
  changeTime(i) {
    this.datepicker.open().then((x) => {
      console.log(x);
      this.timeindex = i;
    });
  }
  
  // submit() {
  // let imgList = [];
  // for (let img of this.imageList) {
  //   this.base64.encodeFile(img).then((x) => {
  //     imgList.push(x);
  //   });
  // }
  // let data = {
  //   times: this.timeList,
  //   repeatdays: this.selectedDays,
  //   instructions: this.instructions,
  //   images: imgList,
  // };
  // console.log(data);
  // this.http.post('url',data).subscribe(x=>{
  // },err=>{
  // })
  // }
  addremoveDay(item) {
    if (this.selectedDays.includes(item.value)) {
      const index = this.selectedDays.indexOf(item.value);
      this.selectedDays.splice(index, 1);
    } else {
      this.selectedDays.push(item.value);
    }
  }

  submit() {
    this.bathingForm.patchValue({ timeList: this.timeList });
    this.bathingForm.patchValue({ repeatDays: this.selectedDays });
    this.bathingForm.patchValue({ images: this.imageList });
    console.log(this.bathingForm.value);
  }
  setData(ev: any, formname) {
    console.log(ev, '|||||');
    this.bathingForm.patchValue({ [formname]: ev });
  }

  addtime(ev, key){
this.timeList = ev;
  }
}
