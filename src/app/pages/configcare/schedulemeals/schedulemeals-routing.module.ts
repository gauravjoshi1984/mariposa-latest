import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulemealsPage } from './schedulemeals.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulemealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulemealsPageRoutingModule {}
