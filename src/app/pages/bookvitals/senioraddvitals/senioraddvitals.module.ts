import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenioraddvitalsPageRoutingModule } from './senioraddvitals-routing.module';

import { SenioraddvitalsPage } from './senioraddvitals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenioraddvitalsPageRoutingModule
  ],
  declarations: [SenioraddvitalsPage]
})
export class SenioraddvitalsPageModule {}
