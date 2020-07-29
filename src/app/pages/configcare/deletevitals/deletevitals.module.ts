import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletevitalsPageRoutingModule } from './deletevitals-routing.module';

import { DeletevitalsPage } from './deletevitals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletevitalsPageRoutingModule
  ],
  declarations: [DeletevitalsPage]
})
export class DeletevitalsPageModule {}
