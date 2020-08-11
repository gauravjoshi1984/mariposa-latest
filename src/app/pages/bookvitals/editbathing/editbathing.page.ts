import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import {
  ImagePicker,
  ImagePickerOptions,
} from '@ionic-native/image-picker/ngx';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editbathing',
  templateUrl: './editbathing.page.html',
  styleUrls: ['./editbathing.page.scss'],
})
export class EditbathingPage implements OnInit {
  @ViewChild('datepicker') datepicker: IonDatetime;

  editbathingForm = new FormGroup({
    timeList: new FormControl([]),
    repeatDays: new FormControl([]),
    instructions: new FormControl(''),
    caregivername:new FormControl(''),
    images: new FormControl([]),
  });

  timeList = [];
  customPickerOptions: any;
  timeindex: number;
  instructions = '';
  caregivername = '';
  imageList = [];
  caregiverList =["Mary","Anna"]
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

  constructor(private imagePicker: ImagePicker) { 
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
  addImage() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 4,
    };
    this.imagePicker.getPictures(options).then(
      (results) => {
        console.log(results);
        for (let i = 0; i < results.length; i++) {
          this.imageList.push(results[i]);
        }
      },
      (err) => {}
    );
  }
  removeImg(i) {
    console.log('*', i);
    this.imageList.splice(i, 1);
  }

  addremoveDay(item) {
    if (this.selectedDays.includes(item.value)) {
      const index = this.selectedDays.indexOf(item.value);
      this.selectedDays.splice(index, 1);
    } else {
      this.selectedDays.push(item.value);
    }
  }

  submit() {
    this.editbathingForm.patchValue({ timeList: this.timeList });
    this.editbathingForm.patchValue({ repeatDays: this.selectedDays });
    this.editbathingForm.patchValue({ images: this.imageList });
    console.log(this.editbathingForm.value);
  }
  setData(ev: any, formname) {
    console.log(ev, '|||||');
    this.editbathingForm.patchValue({ [formname]: ev });
  }

  addtime(ev, key){
this.timeList = ev;
  }

}
