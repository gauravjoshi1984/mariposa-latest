import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletebeauty',
  templateUrl: './deletebeauty.page.html',
  styleUrls: ['./deletebeauty.page.scss'],
})
export class DeletebeautyPage implements OnInit {

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
