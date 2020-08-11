import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulebeautyPageRoutingModule } from './schedulebeauty-routing.module';

import { SchedulebeautyPage } from './schedulebeauty.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulebeautyPageRoutingModule,
    SharedModule,
  ],
  declarations: [SchedulebeautyPage]
})
export class SchedulebeautyPageModule {}
