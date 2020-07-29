import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DressingPage } from './dressing.page';

const routes: Routes = [
  {
    path: '',
    component: DressingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DressingPageRoutingModule {}
