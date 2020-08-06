import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenioraddvitalsaddBPPageRoutingModule } from './senioraddvitalsadd-bp-routing.module';

import { SenioraddvitalsaddBPPage } from './senioraddvitalsadd-bp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenioraddvitalsaddBPPageRoutingModule
  ],
  declarations: [SenioraddvitalsaddBPPage]
})
export class SenioraddvitalsaddBPPageModule {}
