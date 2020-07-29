import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleExercisePage } from './schedule-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleExercisePageRoutingModule {}
