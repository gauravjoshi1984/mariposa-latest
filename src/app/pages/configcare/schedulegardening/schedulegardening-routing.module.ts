import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulegardeningPage } from './schedulegardening.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulegardeningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulegardeningPageRoutingModule {}
