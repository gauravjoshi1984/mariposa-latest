import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OralcarePageRoutingModule } from './oralcare-routing.module';

import { OralcarePage } from './oralcare.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OralcarePageRoutingModule,
    SharedModule,
  ],
  declarations: [OralcarePage]
})
export class OralcarePageModule {}
