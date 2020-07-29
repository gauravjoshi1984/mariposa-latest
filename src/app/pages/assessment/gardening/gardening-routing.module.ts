import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GardeningPage } from './gardening.page';

const routes: Routes = [
  {
    path: '',
    component: GardeningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GardeningPageRoutingModule {}
