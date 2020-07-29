import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignshoppinglistPage } from './assignshoppinglist.page';

const routes: Routes = [
  {
    path: '',
    component: AssignshoppinglistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignshoppinglistPageRoutingModule {}
