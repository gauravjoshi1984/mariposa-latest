import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulebeautyPage } from './schedulebeauty.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulebeautyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulebeautyPageRoutingModule {}
