import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookdetailedviewPage } from './bookdetailedview.page';

const routes: Routes = [
  {
    path: '',
    component: BookdetailedviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookdetailedviewPageRoutingModule {}
