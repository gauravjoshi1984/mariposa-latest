import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseworkPage } from './housework.page';

const routes: Routes = [
  {
    path: '',
    component: HouseworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseworkPageRoutingModule {}
