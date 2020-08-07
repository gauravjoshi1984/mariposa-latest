import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduledressingPageRoutingModule } from './scheduledressing-routing.module';

import { ScheduledressingPage } from './scheduledressing.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduledressingPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [ScheduledressingPage]
})
export class ScheduledressingPageModule {}
