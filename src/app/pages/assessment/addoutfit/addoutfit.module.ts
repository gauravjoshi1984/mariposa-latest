import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddoutfitPageRoutingModule } from './addoutfit-routing.module';

import { AddoutfitPage } from './addoutfit.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddoutfitPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [AddoutfitPage]
})
export class AddoutfitPageModule {}
