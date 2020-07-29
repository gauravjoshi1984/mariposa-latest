import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckvitalsPageRoutingModule } from './checkvitals-routing.module';

import { CheckvitalsPage } from './checkvitals.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CheckvitalsPageRoutingModule,
    SharedModule,
  ],
  declarations: [CheckvitalsPage]
})
export class CheckvitalsPageModule {}
