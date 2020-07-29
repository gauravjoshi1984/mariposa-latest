import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletevitals',
  templateUrl: './deletevitals.page.html',
  styleUrls: ['./deletevitals.page.scss'],
})
export class DeletevitalsPage implements OnInit {

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
