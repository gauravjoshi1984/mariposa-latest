import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepassistancePage } from './sleepassistance.page';

const routes: Routes = [
  {
    path: '',
    component: SleepassistancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepassistancePageRoutingModule {}
