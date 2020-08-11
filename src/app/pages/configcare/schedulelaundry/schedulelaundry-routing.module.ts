import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulelaundryPage } from './schedulelaundry.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulelaundryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulelaundryPageRoutingModule {}
