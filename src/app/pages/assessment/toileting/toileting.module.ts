import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToiletingPageRoutingModule } from './toileting-routing.module';

import { ToiletingPage } from './toileting.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToiletingPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ToiletingPage]
})
export class ToiletingPageModule {}
