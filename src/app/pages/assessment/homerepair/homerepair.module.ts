import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomerepairPageRoutingModule } from './homerepair-routing.module';

import { HomerepairPage } from './homerepair.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomerepairPageRoutingModule,
    SharedModule,
  ],
  declarations: [HomerepairPage]
})
export class HomerepairPageModule {}
