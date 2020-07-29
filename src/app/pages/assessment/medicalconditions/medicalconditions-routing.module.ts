import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalconditionsPage } from './medicalconditions.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalconditionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalconditionsPageRoutingModule {}
