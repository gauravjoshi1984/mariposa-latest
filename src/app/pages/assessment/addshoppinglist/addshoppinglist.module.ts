import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddshoppinglistPageRoutingModule } from './addshoppinglist-routing.module';

import { AddshoppinglistPage } from './addshoppinglist.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddshoppinglistPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [AddshoppinglistPage]
})
export class AddshoppinglistPageModule {}
