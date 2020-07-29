import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarecircleaddseniorPage } from './carecircleaddsenior.page';

const routes: Routes = [
  {
    path: '',
    component: CarecircleaddseniorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarecircleaddseniorPageRoutingModule {}
