import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaregiverprofilePage } from './caregiverprofile.page';

const routes: Routes = [
  {
    path: '',
    component: CaregiverprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaregiverprofilePageRoutingModule {}
