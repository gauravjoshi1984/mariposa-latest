import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulevitalsPageRoutingModule } from './schedulevitals-routing.module';

import { SchedulevitalsPage } from './schedulevitals.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulevitalsPageRoutingModule,
    SharedModule,
  ],
  declarations: [SchedulevitalsPage]
})
export class SchedulevitalsPageModule {}
