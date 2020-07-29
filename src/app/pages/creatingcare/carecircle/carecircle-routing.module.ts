import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarecirclePage } from './carecircle.page';

const routes: Routes = [
  {
    path: '',
    component: CarecirclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarecirclePageRoutingModule {}
