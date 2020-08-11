import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeniorprofilePage } from './seniorprofile.page';

const routes: Routes = [
  {
    path: '',
    component: SeniorprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeniorprofilePageRoutingModule {}
