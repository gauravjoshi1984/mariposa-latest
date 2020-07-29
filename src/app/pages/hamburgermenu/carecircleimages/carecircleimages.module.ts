import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarecircleimagesPageRoutingModule } from './carecircleimages-routing.module';

import { CarecircleimagesPage } from './carecircleimages.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarecircleimagesPageRoutingModule,
    SharedModule,
  ],
  declarations: [CarecircleimagesPage]
})
export class CarecircleimagesPageModule {}
