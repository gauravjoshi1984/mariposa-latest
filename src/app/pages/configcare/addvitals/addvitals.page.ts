import { Component, OnInit } from '@angular/core';
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";

@Component({
  selector: 'app-addvitals',
  templateUrl: './addvitals.page.html',
  styleUrls: ['./addvitals.page.scss'],
})
export class AddvitalsPage implements OnInit {

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
  constructor(private imagePicker: ImagePicker) {
    // this.customPickerOptions = {
    //   buttons: [
    //     {
    //       text: "Submit",
    //       handler: (x) => {
    //         console.log("Clicked Save!", x);
    //         if (this.timeList[this.timeindex]) {
    //           let dateVar = new Date();
    //           dateVar.setHours(
    //             x.ampm.value == "pm" ? x.hour.value + 12 : x.hour.value
    //           );
    //           dateVar.setMinutes(x.minute.value);
    //           this.timeList[this.timeindex] = dateVar;

    //           console.log(this.timeList[this.timeindex]);
    //         }
    //       },
    //     },
    //     {
    //       text: "Delete",
    //       handler: () => {
    //         console.log("Clicked Log. Do not Dismiss.");
    //         // return false;
    //         this.timeList.splice(this.timeindex, 1);
    //       },
    //     },
    //   ],
    // };
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
  // changeTime(i) {
  //   this.datepicker.open().then((x) => {
  //     console.log(x);
  //     this.timeindex = i;
  //   });
  // }
  addImage() {
    let options: ImagePickerOptions = {
      maximumImagesCount: 4,
    };
    this.imagePicker.getPictures(options).then(
      (results) => {
        console.log(results);
        for (var i = 0; i < results.length; i++) {
          this.imageList.push(results[i]);
        }
      },
      (err) => {}
    );
  }
  removeImg(i) {
    console.log("*", i);
    this.imageList.splice(i, 1);
  }
  addremoveDay(item) {
    if (this.selectedDays.includes(item.value)) {
      let index = this.selectedDays.indexOf(item.value);
      this.selectedDays.splice(index, 1);
    } else {
      this.selectedDays.push(item.value);
    }
  }
}
