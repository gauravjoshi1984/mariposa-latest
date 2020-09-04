import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmedicationPage } from './addmedication.page';

const routes: Routes = [
  {
    path: '',
    component: AddmedicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmedicationPageRoutingModule {}
