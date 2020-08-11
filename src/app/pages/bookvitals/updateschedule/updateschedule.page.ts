import { Component, OnInit } from '@angular/core';
import {
  ImagePicker,
  ImagePickerOptions,
} from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-updateschedule',
  templateUrl: './updateschedule.page.html',
  styleUrls: ['./updateschedule.page.scss'],
})
export class UpdateschedulePage implements OnInit {

  constructor(private imagePicker: ImagePicker,) { }


  date = "19";
  month = "January"
  year = "20"

  imageList = [];
  activityList = ["Bathing","Exercise"]
  shoppingList = [
    {
      name:"Tissue",
      quantity:"2 no's",
    },
    {
      name:"Tooth Paste",
      quantity:"1 no's",
    },
    {
      name:"Milk Tin",
      quantity:"10 Ltrs",
    },
      
    ]

  ngOnInit() {
  }

  generateClick(ev: any) {
    // ev.click();
    if (ev.checked == true) {
      ev.checked = false;
    } else {
      ev.checked = true;
    }
    console.log(ev.checked);
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

}
