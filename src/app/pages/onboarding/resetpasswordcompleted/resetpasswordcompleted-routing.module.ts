import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetpasswordcompletedPage } from './resetpasswordcompleted.page';

const routes: Routes = [
  {
    path: '',
    component: ResetpasswordcompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetpasswordcompletedPageRoutingModule {}
