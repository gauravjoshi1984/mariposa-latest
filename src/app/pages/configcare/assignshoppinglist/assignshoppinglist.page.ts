import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from "@ionic/angular";

@Component({
  selector: 'app-assignshoppinglist',
  templateUrl: './assignshoppinglist.page.html',
  styleUrls: ['./assignshoppinglist.page.scss'],
})
export class AssignshoppinglistPage implements OnInit {

  

  

  shoppinglist=[
   {
     name:"Tissue Roll",
     brand:"Quality Brand",
     isChecked:false,
   },
   {
    name:"Tooth Paste",
    brand:"Pepsodent",
    isChecked:false,
  },
 ]
  
 @ViewChild("datepicker") datepicker: IonDatetime;
 timeList = [];
 timeindex: number;

 customPickerOptions: any;
 constructor() {
   this.customPickerOptions = {
     buttons: [
       {
         text: "Submit",
         handler: (x) => {
           console.log("Clicked Save!", x);
           if (this.timeList[this.timeindex]) {
             let dateVar = new Date();
             dateVar.setHours(
               x.ampm.value == "pm" ? x.hour.value + 12 : x.hour.value
             );
             dateVar.setMinutes(x.minute.value);
             this.timeList[this.timeindex] = dateVar;

             console.log(this.timeList[this.timeindex]);
           }
         },
       },
       {
         text: "Delete",
         handler: () => {
           console.log("Clicked Log. Do not Dismiss.");
           // return false;
           this.timeList.splice(this.timeindex, 1);
         },
       },
     ],
   };
 }

 ngOnInit() {
   this.addDate();
 }
 addDate() {
   this.timeList.push(new Date());
 }
 getTimeHR(hr) {
   return ("0" + hr).slice(-2);
 }
 getMinFormat(min) {
   return (min < 10 ? "0" : "") + min;
 }
 changeTime(i) {
   this.datepicker.open().then((x) => {
     console.log(x);
     this.timeindex = i;
   });
 }
 deleteTime(i) {
   this.timeList.splice(i, 1);
 }
}
