import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.page.html',
  styleUrls: ['./addappointment.page.scss'],
})
export class AddappointmentPage implements OnInit {

  constructor() { }

  imageList = [];
  timeList = [];

  ngOnInit() {
  }

  addtime(ev, key){
    this.timeList = ev;
      }

}
