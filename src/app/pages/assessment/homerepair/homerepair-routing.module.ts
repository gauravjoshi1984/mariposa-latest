import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomerepairPage } from './homerepair.page';

const routes: Routes = [
  {
    path: '',
    component: HomerepairPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomerepairPageRoutingModule {}
