import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanionshipPage } from './companionship.page';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CompanionshipPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
})
export class CompanionshipPageRoutingModule {}
