import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.page.html',
  styleUrls: ['./addactivity.page.scss'],
})
export class AddactivityPage implements OnInit {

  timeList = [];
  imageList = [];

  constructor() { }

  ngOnInit() {
  }

  addtime(ev, key){
    this.timeList = ev;
  }

}
