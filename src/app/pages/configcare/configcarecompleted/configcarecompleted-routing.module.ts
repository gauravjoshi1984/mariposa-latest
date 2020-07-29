import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigcarecompletedPage } from './configcarecompleted.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigcarecompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigcarecompletedPageRoutingModule {}
