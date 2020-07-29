import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloodpressuredetailedviewPageRoutingModule } from './bloodpressuredetailedview-routing.module';

import { BloodpressuredetailedviewPage } from './bloodpressuredetailedview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodpressuredetailedviewPageRoutingModule
  ],
  declarations: [BloodpressuredetailedviewPage]
})
export class BloodpressuredetailedviewPageModule {}
