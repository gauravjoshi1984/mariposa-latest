import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminprofilePageRoutingModule } from './adminprofile-routing.module';

import { AdminprofilePage } from './adminprofile.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminprofilePageRoutingModule,
    SharedModule,
  ],
  declarations: [AdminprofilePage]
})
export class AdminprofilePageModule {}
