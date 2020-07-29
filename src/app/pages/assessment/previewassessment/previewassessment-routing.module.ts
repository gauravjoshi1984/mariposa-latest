import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewassessmentPage } from './previewassessment.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewassessmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewassessmentPageRoutingModule {}
