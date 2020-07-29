import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowcarecirclePageRoutingModule } from './showcarecircle-routing.module';

import { ShowcarecirclePage } from './showcarecircle.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowcarecirclePageRoutingModule,
    SharedModule,
  ],
  declarations: [ShowcarecirclePage]
})
export class ShowcarecirclePageModule {}
