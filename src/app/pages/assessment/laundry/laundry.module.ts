import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaundryPageRoutingModule } from './laundry-routing.module';

import { LaundryPage } from './laundry.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaundryPageRoutingModule,
    SharedModule,
  ],
  declarations: [LaundryPage]
})
export class LaundryPageModule {}
