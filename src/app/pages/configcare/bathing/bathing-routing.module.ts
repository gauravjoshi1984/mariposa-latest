import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BathingPage } from './bathing.page';

const routes: Routes = [
  {
    path: '',
    component: BathingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BathingPageRoutingModule {}
