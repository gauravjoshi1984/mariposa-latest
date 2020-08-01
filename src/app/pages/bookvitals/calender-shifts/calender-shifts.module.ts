import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalenderShiftsPageRoutingModule } from './calender-shifts-routing.module';

import { CalenderShiftsPage } from './calender-shifts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalenderShiftsPageRoutingModule
  ],
  declarations: [CalenderShiftsPage]
})
export class CalenderShiftsPageModule {}
