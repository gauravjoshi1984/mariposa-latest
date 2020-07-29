import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteExercisePage } from './delete-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteExercisePageRoutingModule {}
