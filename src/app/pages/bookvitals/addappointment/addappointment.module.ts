import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddappointmentPageRoutingModule } from './addappointment-routing.module';

import { AddappointmentPage } from './addappointment.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddappointmentPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [AddappointmentPage]
})
export class AddappointmentPageModule {}
