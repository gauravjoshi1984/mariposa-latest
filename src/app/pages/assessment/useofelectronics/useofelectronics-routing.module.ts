import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UseofelectronicsPage } from './useofelectronics.page';

const routes: Routes = [
  {
    path: '',
    component: UseofelectronicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UseofelectronicsPageRoutingModule {}
