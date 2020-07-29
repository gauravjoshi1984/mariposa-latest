import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoundcarePage } from './woundcare.page';

const routes: Routes = [
  {
    path: '',
    component: WoundcarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoundcarePageRoutingModule {}
