import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CalenderShiftsPage } from "./calender-shifts.page";
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: CalenderShiftsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalenderShiftsPageRoutingModule {}
