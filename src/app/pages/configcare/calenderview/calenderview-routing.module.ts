import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalenderviewPage } from './calenderview.page';

const routes: Routes = [
  {
    path: '',
    component: CalenderviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalenderviewPageRoutingModule {}
