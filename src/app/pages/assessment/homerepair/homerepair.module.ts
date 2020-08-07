import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ],
  declarations: [HomerepairPage]
})
export class HomerepairPageModule {}
