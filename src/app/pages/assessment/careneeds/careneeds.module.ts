import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CareneedsPageRoutingModule } from './careneeds-routing.module';

import { CareneedsPage } from './careneeds.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CareneedsPageRoutingModule,
    SharedModule,
  ],
  declarations: [CareneedsPage]
})
export class CareneedsPageModule {}
