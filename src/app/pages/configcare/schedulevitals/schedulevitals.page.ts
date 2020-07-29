import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedulevitals',
  templateUrl: './schedulevitals.page.html',
  styleUrls: ['./schedulevitals.page.scss'],
})
export class SchedulevitalsPage implements OnInit {

  ccvitalinfo=[
    {
      type:"Blood Pressure",
      frequency:"Daily",
      frequencyinaday:"Once",
      time:"7:30 AM",
    },
    {
      type:"Temperature",
      frequency:"Daily",
      frequencyinaday:"Twice",
      time:"7:30 AM",
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
