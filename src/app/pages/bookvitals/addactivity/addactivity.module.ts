import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddactivityPageRoutingModule } from './addactivity-routing.module';

import { AddactivityPage } from './addactivity.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddactivityPageRoutingModule,
    SharedModule,
  ],
  declarations: [AddactivityPage]
})
export class AddactivityPageModule {}
