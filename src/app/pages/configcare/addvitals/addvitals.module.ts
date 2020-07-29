import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddvitalsPageRoutingModule } from './addvitals-routing.module';

import { AddvitalsPage } from './addvitals.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddvitalsPageRoutingModule,
    SharedModule,
  ],
  declarations: [AddvitalsPage]
})
export class AddvitalsPageModule {}
