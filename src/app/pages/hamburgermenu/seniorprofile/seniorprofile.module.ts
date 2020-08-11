import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeniorprofilePageRoutingModule } from './seniorprofile-routing.module';

import { SeniorprofilePage } from './seniorprofile.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeniorprofilePageRoutingModule,
    SharedModule,
  ],
  declarations: [SeniorprofilePage]
})
export class SeniorprofilePageModule {}
