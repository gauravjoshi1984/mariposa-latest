import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CalenderShiftsPageRoutingModule } from "./calender-shifts-routing.module";

import { CalenderShiftsPage } from "./calender-shifts.page";
import { AddactivityComponent } from "./addactivity/addactivity.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalenderShiftsPageRoutingModule,
  ],
  declarations: [CalenderShiftsPage, AddactivityComponent],
})
export class CalenderShiftsPageModule {}
