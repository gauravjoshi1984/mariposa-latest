import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes:Routes = [{path:"",component:TabsPage,children:[

  {
    path:"books",loadChildren:()=>import('../book/book.module').then(x=>x.BookPageModule)
  }, {
    path:"vitals",loadChildren:()=>import('../vitals/vitals.module').then(x=>x.VitalsPageModule)
  },
  {
    path:"calendar",loadChildren:()=>import('../calendar/calendar.module').then(x=>x.CalendarPageModule)
  },
  {
    path:"menu",loadChildren:()=>import('src/app/pages/hamburgermenu/menu/menu.module').then(x=>x.MenuPageModule)
  },
  
  {path:"",redirectTo:"books",pathMatch:"full"}
]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
