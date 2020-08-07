import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaregiverprofilePageRoutingModule } from './caregiverprofile-routing.module';

import { CaregiverprofilePage } from './caregiverprofile.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaregiverprofilePageRoutingModule,
    SharedModule,
  ],
  declarations: [CaregiverprofilePage]
})
export class CaregiverprofilePageModule {}
