import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodpressuredetailedviewPage } from './bloodpressuredetailedview.page';

const routes: Routes = [
  {
    path: '',
    component: BloodpressuredetailedviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodpressuredetailedviewPageRoutingModule {}
