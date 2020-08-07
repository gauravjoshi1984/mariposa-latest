import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddoutfitPage } from './addoutfit.page';

const routes: Routes = [
  {
    path: '',
    component: AddoutfitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddoutfitPageRoutingModule {}
