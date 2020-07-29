import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoundcarePageRoutingModule } from './woundcare-routing.module';

import { WoundcarePage } from './woundcare.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WoundcarePageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [WoundcarePage]
})
export class WoundcarePageModule {}
