import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';
import {
  ImagePicker,
  ImagePickerOptions,
} from "@ionic-native/image-picker/ngx";

@Component({
  selector: 'app-sleepassistance',
  templateUrl: './sleepassistance.page.html',
  styleUrls: ['./sleepassistance.page.scss'],
})
export class SleepassistancePage implements OnInit {
  @ViewChild('datepicker') datepicker: IonDatetime;
  @ViewChild('datepicker1') datepicker1: IonDatetime;
  @ViewChild('datepicker2') datepicker2: IonDatetime;

  constructor( private navCtrl: NavController, private imagePicker: ImagePicker, private assessmentService: AssessmentServiceService,
               private dataService: DataserviceService, ) { }

  datepick: any;
  datepick1: any;
  datepick2: any;
  key;
  careCircleId;
  userId;
  electronicList = [];
  stateObject;
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



  generateClick(ev: any) {
    // ev.click();
    if (ev.checked === true) {
      ev.checked = false;
    } else {
      ev.checked = true;
    }
  }

  changeTime() {
    this.datepicker.open().then((x) => {
      console.log(x);
      this.datepick = x;
    });
  }

  changeTime1() {
    this.datepicker1.open().then((x) => {
      console.log(x);
      this.datepick1 = x;
    });
  }

  changeTime2() {
    this.datepicker2.open().then((x) => {
      console.log(x);
      this.datepick2 = x;
    });
  }
  addNewNap(){
    console.log('add new nap');
  }
  async ionViewWillEnter(){
    this.key = 'ELECTRONICS';
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
  }
}
