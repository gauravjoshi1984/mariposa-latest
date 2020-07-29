import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulebeautyPageRoutingModule } from './schedulebeauty-routing.module';

import { SchedulebeautyPage } from './schedulebeauty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulebeautyPageRoutingModule
  ],
  declarations: [SchedulebeautyPage]
})
export class SchedulebeautyPageModule {}
