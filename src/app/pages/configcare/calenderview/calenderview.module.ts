import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalenderviewPageRoutingModule } from './calenderview-routing.module';

import { CalenderviewPage } from './calenderview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalenderviewPageRoutingModule
  ],
  declarations: [CalenderviewPage]
})
export class CalenderviewPageModule {}
