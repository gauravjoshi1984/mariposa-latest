import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulehouseworkPage } from './schedulehousework.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulehouseworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulehouseworkPageRoutingModule {}
