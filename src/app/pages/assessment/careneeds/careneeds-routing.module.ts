import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareneedsPage } from './careneeds.page';

const routes: Routes = [
  {
    path: '',
    component: CareneedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareneedsPageRoutingModule {}
