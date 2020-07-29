import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListofmembersPage } from './listofmembers.page';

const routes: Routes = [
  {
    path: '',
    component: ListofmembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListofmembersPageRoutingModule {}
