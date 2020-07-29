import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedulebeauty',
  templateUrl: './schedulebeauty.page.html',
  styleUrls: ['./schedulebeauty.page.scss'],
})
export class SchedulebeautyPage implements OnInit {

  ccbeautyinfo=[
    {
      type:"Hair Cut",
      place:"Web",
      style:"Shorten",
      time:"7.30 AM",
    },
    {
      type:"Shaving Mustache",
      place:"Web",
      style:"Clean Shave",
      time:"7.30 AM",
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
