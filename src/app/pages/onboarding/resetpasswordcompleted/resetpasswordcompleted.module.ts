import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetpasswordcompletedPageRoutingModule } from './resetpasswordcompleted-routing.module';

import { ResetpasswordcompletedPage } from './resetpasswordcompleted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetpasswordcompletedPageRoutingModule
  ],
  declarations: [ResetpasswordcompletedPage]
})
export class ResetpasswordcompletedPageModule {}
