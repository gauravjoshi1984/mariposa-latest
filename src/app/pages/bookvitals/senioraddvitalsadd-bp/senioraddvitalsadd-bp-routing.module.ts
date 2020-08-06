import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenioraddvitalsaddBPPage } from './senioraddvitalsadd-bp.page';

const routes: Routes = [
  {
    path: '',
    component: SenioraddvitalsaddBPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenioraddvitalsaddBPPageRoutingModule {}
