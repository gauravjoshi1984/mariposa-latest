import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulewoundcarePage } from './schedulewoundcare.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulewoundcarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulewoundcarePageRoutingModule {}
