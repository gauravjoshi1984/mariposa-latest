import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletevitalsPageRoutingModule } from './deletevitals-routing.module';

import { DeletevitalsPage } from './deletevitals.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletevitalsPageRoutingModule,
    SharedModule,
  ],
  declarations: [DeletevitalsPage]
})
export class DeletevitalsPageModule {}
