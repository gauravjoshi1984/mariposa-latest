import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpasswordcompletedPage } from './forgotpasswordcompleted.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpasswordcompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpasswordcompletedPageRoutingModule {}
