import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BathingdetailsPage } from './bathingdetails.page';

const routes: Routes = [
  {
    path: '',
    component: BathingdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BathingdetailsPageRoutingModule {}
