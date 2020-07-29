import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbeautyPage } from './addbeauty.page';

const routes: Routes = [
  {
    path: '',
    component: AddbeautyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbeautyPageRoutingModule {}
