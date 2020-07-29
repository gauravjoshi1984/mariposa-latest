import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalconditionsPageRoutingModule } from './medicalconditions-routing.module';

import { MedicalconditionsPage } from './medicalconditions.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalconditionsPageRoutingModule,
    SharedModule,
  ],
  declarations: [MedicalconditionsPage]
})
export class MedicalconditionsPageModule {}
