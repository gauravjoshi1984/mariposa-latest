import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulevitalsPage } from './schedulevitals.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulevitalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulevitalsPageRoutingModule {}
