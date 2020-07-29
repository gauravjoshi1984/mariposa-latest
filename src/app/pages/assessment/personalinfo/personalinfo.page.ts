import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.page.html',
  styleUrls: ['./personalinfo.page.scss'],
})
export class PersonalinfoPage implements OnInit {
  @ViewChild('dobdate') Dobdate: IonDatetime;
  @ViewChild('dobmonth') Dobmonth: IonDatetime;
  @ViewChild('dobyear') Dobyear: IonDatetime;
  gen = 'M';
  dobdate1: any ='Date';
  dobmnth: any ='Month';
  dobyr: any ='Year';
  customPickerOptions1: any;

  customPickerOptions2: any;

  customPickerOptions3: any;

  constructor(private navCtrl: NavController,) {
    this.customPickerOptions1 = {
      buttons: [
        {
          text: 'Save',
          handler: (x) => {
            console.log('Clicked Save!', x);
            this.dobdate1 = x.day.text;
          },
        },
      ],
    };
    this.customPickerOptions2 = {
      buttons: [
        {
          text: 'Save',
          handler: (x) => {
            console.log('Clicked Save!');
            this.dobmnth = x.month.text;
          },
        },
      ],
    };
    this.customPickerOptions3 = {
      buttons: [
        {
          text: 'Save',
          handler: (x) => {
            console.log('Clicked Save!');
            this.dobyr = x.year.text;
          },
        },
      ],
    };
  }

  ngOnInit() {}


  save(){
    this.navCtrl.navigateForward(['/assessment/assessmentbar']);
  }

  changeDay() {
    this.Dobdate.open().then((x) => {
      console.log(x);
      this.dobdate1 = x;
    });
  }

  changeMonth() {
    this.Dobmonth.open().then((x) => {
      console.log(x);
      this.dobmnth = x;
    });
  }

  changeYear() {
    this.Dobyear.open().then((x) => {
      console.log(x);
      this.dobyr = x;
    });
  }
}
