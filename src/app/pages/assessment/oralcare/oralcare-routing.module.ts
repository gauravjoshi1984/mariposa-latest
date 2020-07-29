import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OralcarePage } from './oralcare.page';

const routes: Routes = [
  {
    path: '',
    component: OralcarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OralcarePageRoutingModule {}
