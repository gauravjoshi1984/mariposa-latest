import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletemealsPage } from './deletemeals.page';

const routes: Routes = [
  {
    path: '',
    component: DeletemealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletemealsPageRoutingModule {}
