import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeandsafetyPageRoutingModule } from './homeandsafety-routing.module';

import { HomeandsafetyPage } from './homeandsafety.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeandsafetyPageRoutingModule,
    SharedModule,
  ],
  declarations: [HomeandsafetyPage]
})
export class HomeandsafetyPageModule {}
