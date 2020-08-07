import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbloodpressurePage } from './addbloodpressure.page';

const routes: Routes = [
  {
    path: '',
    component: AddbloodpressurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbloodpressurePageRoutingModule {}
