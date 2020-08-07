import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbeautyPageRoutingModule } from './addbeauty-routing.module';

import { AddbeautyPage } from './addbeauty.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbeautyPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [AddbeautyPage]
})
export class AddbeautyPageModule {}
