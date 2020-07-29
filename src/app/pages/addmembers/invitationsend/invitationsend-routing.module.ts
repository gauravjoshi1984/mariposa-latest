import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitationsendPage } from './invitationsend.page';

const routes: Routes = [
  {
    path: '',
    component: InvitationsendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitationsendPageRoutingModule {}
