import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditmemberPage } from './editmember.page';

const routes: Routes = [
  {
    path: '',
    component: EditmemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditmemberPageRoutingModule {}
