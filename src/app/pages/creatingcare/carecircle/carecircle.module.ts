import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarecirclePageRoutingModule } from './carecircle-routing.module';

import { CarecirclePage } from './carecircle.page';
import { PopoverComponent } from './popover/popover.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarecirclePageRoutingModule,
    SharedModule,
  ],
  declarations: [CarecirclePage,PopoverComponent]
})
export class CarecirclePageModule {

   name  = "John";
}
