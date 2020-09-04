import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacypolicyPageRoutingModule } from './privacypolicy-routing.module';

import { PrivacypolicyPage } from './privacypolicy.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacypolicyPageRoutingModule,
    SharedModule,
  ],
  declarations: [PrivacypolicyPage]
})
export class PrivacypolicyPageModule {}
