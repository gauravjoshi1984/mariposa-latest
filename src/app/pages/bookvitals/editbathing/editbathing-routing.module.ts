import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditbathingPage } from './editbathing.page';

const routes: Routes = [
  {
    path: '',
    component: EditbathingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditbathingPageRoutingModule {}
