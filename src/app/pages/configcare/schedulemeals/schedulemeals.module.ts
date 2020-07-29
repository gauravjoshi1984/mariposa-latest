import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulemealsPageRoutingModule } from './schedulemeals-routing.module';

import { SchedulemealsPage } from './schedulemeals.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulemealsPageRoutingModule,
    SharedModule,
  ],
  declarations: [SchedulemealsPage]
})
export class SchedulemealsPageModule {}
