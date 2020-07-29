import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToiletingPage } from './toileting.page';

const routes: Routes = [
  {
    path: '',
    component: ToiletingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToiletingPageRoutingModule {}
