import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditshoppinglistPage } from './editshoppinglist.page';

const routes: Routes = [
  {
    path: '',
    component: EditshoppinglistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditshoppinglistPageRoutingModule {}
