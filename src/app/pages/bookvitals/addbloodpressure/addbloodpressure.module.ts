import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbloodpressurePageRoutingModule } from './addbloodpressure-routing.module';

import { AddbloodpressurePage } from './addbloodpressure.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbloodpressurePageRoutingModule,
    SharedModule,
  ],
  declarations: [AddbloodpressurePage]
})
export class AddbloodpressurePageModule {}
