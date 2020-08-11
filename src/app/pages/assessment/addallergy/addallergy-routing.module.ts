import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddallergyPage } from './addallergy.page';

const routes: Routes = [
  {
    path: '',
    component: AddallergyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddallergyPageRoutingModule {}
