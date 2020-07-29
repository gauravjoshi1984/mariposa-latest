import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletebeautyPage } from './deletebeauty.page';

const routes: Routes = [
  {
    path: '',
    component: DeletebeautyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletebeautyPageRoutingModule {}
