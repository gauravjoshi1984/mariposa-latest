import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DressingPageRoutingModule } from './dressing-routing.module';

import { DressingPage } from './dressing.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DressingPageRoutingModule,
    SharedModule,
  ],
  declarations: [DressingPage]
})
export class DressingPageModule {}
