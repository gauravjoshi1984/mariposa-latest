import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulelaundryPageRoutingModule } from './schedulelaundry-routing.module';

import { SchedulelaundryPage } from './schedulelaundry.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulelaundryPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [SchedulelaundryPage]
})
export class SchedulelaundryPageModule {}
