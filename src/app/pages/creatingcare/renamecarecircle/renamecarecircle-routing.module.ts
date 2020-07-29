import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenamecarecirclePage } from './renamecarecircle.page';

const routes: Routes = [
  {
    path: '',
    component: RenamecarecirclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenamecarecirclePageRoutingModule {}
