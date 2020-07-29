import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedulemeals',
  templateUrl: './schedulemeals.page.html',
  styleUrls: ['./schedulemeals.page.scss'],
})
export class SchedulemealsPage implements OnInit {

  ccmealinfo=[
    {
      meal:"Breakfast",
      frequency:"Daily",
      items:"Wheat Bread with Peanut Butter",
      time:"9.00 AM",

    },
    {
      meal:"Breakfast",
      frequency:"Daily",
      items:"Wheat Bread with Peanut Butter",
      time:"9.00 AM",

    },
    
    

  ]

  gen="M";

  constructor() { }

  ngOnInit() {
  }

}
