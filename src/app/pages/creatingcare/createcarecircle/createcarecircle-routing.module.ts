import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatecarecirclePage } from './createcarecircle.page';

const routes: Routes = [
  {
    path: '',
    component: CreatecarecirclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatecarecirclePageRoutingModule {}
