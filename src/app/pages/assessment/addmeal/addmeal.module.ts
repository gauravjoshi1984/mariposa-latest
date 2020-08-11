import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmealPageRoutingModule } from './addmeal-routing.module';

import { AddmealPage } from './addmeal.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmealPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [AddmealPage, ]
})
export class AddmealPageModule {}
