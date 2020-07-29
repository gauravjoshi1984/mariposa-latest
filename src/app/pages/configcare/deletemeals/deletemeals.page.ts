import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletemeals',
  templateUrl: './deletemeals.page.html',
  styleUrls: ['./deletemeals.page.scss'],
})
export class DeletemealsPage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
