import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigcarecompletedPageRoutingModule } from './configcarecompleted-routing.module';

import { ConfigcarecompletedPage } from './configcarecompleted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigcarecompletedPageRoutingModule
  ],
  declarations: [ConfigcarecompletedPage]
})
export class ConfigcarecompletedPageModule {}
