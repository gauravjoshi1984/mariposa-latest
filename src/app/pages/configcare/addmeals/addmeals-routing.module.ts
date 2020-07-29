import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmealsPage } from './addmeals.page';

const routes: Routes = [
  {
    path: '',
    component: AddmealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmealsPageRoutingModule {}
