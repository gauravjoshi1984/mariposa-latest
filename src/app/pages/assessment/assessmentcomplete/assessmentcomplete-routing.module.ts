import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssessmentcompletePage } from './assessmentcomplete.page';

const routes: Routes = [
  {
    path: '',
    component: AssessmentcompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentcompletePageRoutingModule {}
