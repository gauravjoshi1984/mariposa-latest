import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EatingPageRoutingModule } from './eating-routing.module';

import { EatingPage } from './eating.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EatingPageRoutingModule,
    SharedModule,
  ],
  declarations: [EatingPage]
})
export class EatingPageModule {}
