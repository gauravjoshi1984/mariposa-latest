import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletevitalsPage } from './deletevitals.page';

const routes: Routes = [
  {
    path: '',
    component: DeletevitalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletevitalsPageRoutingModule {}
