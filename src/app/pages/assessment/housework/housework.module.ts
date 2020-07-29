import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseworkPageRoutingModule } from './housework-routing.module';

import { HouseworkPage } from './housework.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseworkPageRoutingModule,
    SharedModule,
  ],
  declarations: [HouseworkPage]
})
export class HouseworkPageModule {}
