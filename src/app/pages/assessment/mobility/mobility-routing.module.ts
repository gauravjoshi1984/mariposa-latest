import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilityPage } from './mobility.page';

const routes: Routes = [
  {
    path: '',
    component: MobilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilityPageRoutingModule {}
