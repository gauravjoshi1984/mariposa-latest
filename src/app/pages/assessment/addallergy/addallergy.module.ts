import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddallergyPageRoutingModule } from './addallergy-routing.module';

import { AddallergyPage } from './addallergy.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddallergyPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [AddallergyPage]
})
export class AddallergyPageModule {}
