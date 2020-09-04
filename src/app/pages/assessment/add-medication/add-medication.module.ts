import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMedicationPageRoutingModule } from './add-medication-routing.module';

import { AddMedicationPage } from './add-medication.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMedicationPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [AddMedicationPage]
})
export class AddMedicationPageModule {}
