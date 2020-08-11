import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateschedulePage } from './updateschedule.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateschedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateschedulePageRoutingModule {}
