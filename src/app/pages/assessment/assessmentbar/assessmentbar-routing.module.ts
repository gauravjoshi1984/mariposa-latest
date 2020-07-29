import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssessmentbarPage } from './assessmentbar.page';

const routes: Routes = [
  {
    path: '',
    component: AssessmentbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentbarPageRoutingModule {}
