import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaundryPage } from './laundry.page';

const routes: Routes = [
  {
    path: '',
    component: LaundryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaundryPageRoutingModule {}
