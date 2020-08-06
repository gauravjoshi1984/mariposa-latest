import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenioraddvitalsPage } from './senioraddvitals.page';

const routes: Routes = [
  {
    path: '',
    component: SenioraddvitalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenioraddvitalsPageRoutingModule {}
