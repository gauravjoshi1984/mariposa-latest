import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-exercise',
  templateUrl: './schedule-exercise.page.html',
  styleUrls: ['./schedule-exercise.page.scss'],
})
export class ScheduleExercisePage implements OnInit {

  constructor() { }

  ccexerciseinfo=[
    {
      type:"Physical Therapy",
      frequency:"Daily",
      frequencyinaday:"Once",
      time:"8:30 AM",
    },
    {
      type:"Yoga",
      frequency:"Daily",
      frequencyinaday:"Once",
      time:"6:30 AM",
    },

  ]

  ngOnInit() {
  }

}
