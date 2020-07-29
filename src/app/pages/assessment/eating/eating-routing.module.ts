import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EatingPage } from './eating.page';

const routes: Routes = [
  {
    path: '',
    component: EatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EatingPageRoutingModule {}
