import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulewoundcarePageRoutingModule } from './schedulewoundcare-routing.module';

import { SchedulewoundcarePage } from './schedulewoundcare.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulewoundcarePageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [SchedulewoundcarePage]
})
export class SchedulewoundcarePageModule {}
