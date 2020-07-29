import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonDatetime } from '@ionic/angular';

import { SleepassistancePageRoutingModule } from './sleepassistance-routing.module';

import { SleepassistancePage } from './sleepassistance.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepassistancePageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [SleepassistancePage]
})
export class SleepassistancePageModule {}
