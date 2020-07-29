import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeandsafetyPage } from './homeandsafety.page';

const routes: Routes = [
  {
    path: '',
    component: HomeandsafetyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeandsafetyPageRoutingModule {}
