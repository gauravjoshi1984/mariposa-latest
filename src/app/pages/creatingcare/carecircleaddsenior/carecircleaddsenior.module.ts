import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarecircleaddseniorPageRoutingModule } from './carecircleaddsenior-routing.module';

import { CarecircleaddseniorPage } from './carecircleaddsenior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarecircleaddseniorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CarecircleaddseniorPage]
})
export class CarecircleaddseniorPageModule {}
