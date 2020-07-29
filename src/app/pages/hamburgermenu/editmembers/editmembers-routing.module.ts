import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditmembersPage } from './editmembers.page';

const routes: Routes = [
  {
    path: '',
    component: EditmembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditmembersPageRoutingModule {}
