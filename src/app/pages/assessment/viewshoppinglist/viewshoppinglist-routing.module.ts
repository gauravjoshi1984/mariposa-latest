import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewshoppinglistPage } from './viewshoppinglist.page';

const routes: Routes = [
  {
    path: '',
    component: ViewshoppinglistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewshoppinglistPageRoutingModule {}
