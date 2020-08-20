import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalenderviewPageRoutingModule } from './calenderview-routing.module';

import { CalenderviewPage } from './calenderview.page';

import { SharedModule } from "../../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalenderviewPageRoutingModule,
    SharedModule
  ],
  declarations: [CalenderviewPage]
})
export class CalenderviewPageModule {}
