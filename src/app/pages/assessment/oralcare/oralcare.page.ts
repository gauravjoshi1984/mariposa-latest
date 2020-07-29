import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";

@Component({
  selector: 'app-oralcare',
  templateUrl: './oralcare.page.html',
  styleUrls: ['./oralcare.page.scss'],
})
export class OralcarePage implements OnInit {

  constructor(private navCtrl: NavController,
              private imagePicker: ImagePicker,) { }

  ngOnInit() {
  }

  imageList = [];

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

  save(){
    this.navCtrl.navigateForward(['/assessment/assessmentbar']);

  }

  changeToggle(ev: any) {
    console.log(ev);
  }
  

}
