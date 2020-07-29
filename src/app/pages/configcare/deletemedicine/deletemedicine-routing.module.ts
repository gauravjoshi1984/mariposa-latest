import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletemedicinePage } from './deletemedicine.page';

const routes: Routes = [
  {
    path: '',
    component: DeletemedicinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletemedicinePageRoutingModule {}
