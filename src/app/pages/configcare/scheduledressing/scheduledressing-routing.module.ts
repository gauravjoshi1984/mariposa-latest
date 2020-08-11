import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduledressingPage } from './scheduledressing.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduledressingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduledressingPageRoutingModule {}
