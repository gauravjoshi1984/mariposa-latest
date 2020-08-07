import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulegardeningPageRoutingModule } from './schedulegardening-routing.module';

import { SchedulegardeningPage } from './schedulegardening.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulegardeningPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [SchedulegardeningPage]
})
export class SchedulegardeningPageModule {}
