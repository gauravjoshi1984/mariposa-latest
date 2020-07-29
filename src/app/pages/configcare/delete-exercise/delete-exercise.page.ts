import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-exercise',
  templateUrl: './delete-exercise.page.html',
  styleUrls: ['./delete-exercise.page.scss'],
})
export class DeleteExercisePage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
