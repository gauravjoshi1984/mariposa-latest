import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetcheckmailPage } from './resetcheckmail.page';

const routes: Routes = [
  {
    path: '',
    component: ResetcheckmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetcheckmailPageRoutingModule {}
