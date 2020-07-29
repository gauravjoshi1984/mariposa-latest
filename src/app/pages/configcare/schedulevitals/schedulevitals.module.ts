import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulevitalsPageRoutingModule } from './schedulevitals-routing.module';

import { SchedulevitalsPage } from './schedulevitals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulevitalsPageRoutingModule
  ],
  declarations: [SchedulevitalsPage]
})
export class SchedulevitalsPageModule {}
