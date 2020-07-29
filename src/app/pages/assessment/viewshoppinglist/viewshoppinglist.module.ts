import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewshoppinglistPageRoutingModule } from './viewshoppinglist-routing.module';

import { ViewshoppinglistPage } from './viewshoppinglist.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewshoppinglistPageRoutingModule,
    SharedModule,
  ],
  declarations: [ViewshoppinglistPage]
})
export class ViewshoppinglistPageModule {}
