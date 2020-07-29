import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetpasswordPageRoutingModule } from './resetpassword-routing.module';

import { ResetpasswordPage } from './resetpassword.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetpasswordPageRoutingModule,
    SharedModule,
  ],
  declarations: [ResetpasswordPage]
})
export class ResetpasswordPageModule {}
