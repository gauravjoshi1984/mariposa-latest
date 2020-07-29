import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.page.html',
  styleUrls: ['./medication.page.scss'],
})
export class MedicationPage implements OnInit {

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  constructor() { }
  selectedDay = "Mon";
  timeLine = [{}];
  daysList = [
    {
      name: "Mon",
    },
    {
      name: "Tue",
    },
  ];

  ngOnInit() {
  }

  selectChip(item) {
    this.selectedDay = item.name;
    this.timeLine.forEach(element => {
      //if(element.name){
      //  element.card=!element.card
      //}
      
    });
  }

}
