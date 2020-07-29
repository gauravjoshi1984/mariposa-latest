import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UseofelectronicsPageRoutingModule } from './useofelectronics-routing.module';

import { UseofelectronicsPage } from './useofelectronics.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UseofelectronicsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [UseofelectronicsPage]
})
export class UseofelectronicsPageModule {}
