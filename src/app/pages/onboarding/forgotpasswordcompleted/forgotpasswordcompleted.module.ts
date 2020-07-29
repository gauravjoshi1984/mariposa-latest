import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpasswordcompletedPageRoutingModule } from './forgotpasswordcompleted-routing.module';

import { ForgotpasswordcompletedPage } from './forgotpasswordcompleted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpasswordcompletedPageRoutingModule
  ],
  declarations: [ForgotpasswordcompletedPage]
})
export class ResetpasswordcompletedPageModule {}
