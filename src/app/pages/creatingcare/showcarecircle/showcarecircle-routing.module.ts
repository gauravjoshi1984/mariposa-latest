import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowcarecirclePage } from './showcarecircle.page';

const routes: Routes = [
  {
    path: '',
    component: ShowcarecirclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcarecirclePageRoutingModule {}
