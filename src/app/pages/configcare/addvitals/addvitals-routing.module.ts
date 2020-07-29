import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddvitalsPage } from './addvitals.page';

const routes: Routes = [
  {
    path: '',
    component: AddvitalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddvitalsPageRoutingModule {}
