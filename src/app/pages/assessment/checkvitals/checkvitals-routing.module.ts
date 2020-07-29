import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckvitalsPage } from './checkvitals.page';

const routes: Routes = [
  {
    path: '',
    component: CheckvitalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckvitalsPageRoutingModule {}
