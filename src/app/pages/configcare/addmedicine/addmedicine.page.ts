import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";
import { IonDatetime } from "@ionic/angular";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-addmedicine",
  templateUrl: "./addmedicine.page.html",
  styleUrls: ["./addmedicine.page.scss"],
})
export class AddmedicinePage implements OnInit {
  medicineForm = new FormGroup({
    medicineType: new FormControl(""),
    medicineName: new FormControl(),
    timeList: new FormControl([]),
    repeatDays: new FormControl([]),
    dosage: new FormControl("1"),
    startDate: new FormControl("2020-05-12T13:47:20.789"),
    endDate: new FormControl("2020-05-12T13:47:20.789"),
    instructions: new FormControl(""),
    images: new FormControl([]),
  });
  timeList = [];
  customPickerOptions: any;
  timeindex: number;
  instructions = "";
  imageList = ["hgsdahgsafghsafdghasafdasfasgfjhdagfjhdgjsfdh.jpg","myself.jpg"];
  selectData = [
    {
      value: "yes",
      name: "Yes",
    },
    {
      value: "no",
      name: "NO",
    },
  ];
  selectData2 = [
    {
      value: "1",
      name: "1",
    },
    {
      value: "2",
      name: "2",
    },
  ];

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
  setData(ev: any, formname) {
    console.log(ev, "|||||");
    this.medicineForm.patchValue({ [formname]: ev });
  }
  submit() {
    this.medicineForm.patchValue({ timeList: this.timeList });
    this.medicineForm.patchValue({ repeatDays: this.selectedDays });
    this.medicineForm.patchValue({ images: this.imageList });
    console.log(this.medicineForm.value);
  }
}
