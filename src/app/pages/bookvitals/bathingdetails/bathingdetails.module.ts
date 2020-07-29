import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BathingdetailsPageRoutingModule } from './bathingdetails-routing.module';

import { BathingdetailsPage } from './bathingdetails.page';
import { DltbathingpopoverComponent } from './dltbathingpopover/dltbathingpopover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BathingdetailsPageRoutingModule
  ],
  declarations: [BathingdetailsPage, DltbathingpopoverComponent]
})
export class BathingdetailsPageModule {}
