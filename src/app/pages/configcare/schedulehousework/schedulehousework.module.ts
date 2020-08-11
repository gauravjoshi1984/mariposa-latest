import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulehouseworkPageRoutingModule } from './schedulehousework-routing.module';

import { SchedulehouseworkPage } from './schedulehousework.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulehouseworkPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [SchedulehouseworkPage]
})
export class SchedulehouseworkPageModule {}
