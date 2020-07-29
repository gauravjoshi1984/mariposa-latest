import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditmemberdetailsPage } from './editmemberdetails.page';

const routes: Routes = [
  {
    path: '',
    component: EditmemberdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditmemberdetailsPageRoutingModule {}
