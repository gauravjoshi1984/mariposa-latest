import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddothertasksPageRoutingModule } from './addothertasks-routing.module';

import { AddothertasksPage } from './addothertasks.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddothertasksPageRoutingModule,
    SharedModule,
  ],
  declarations: [AddothertasksPage]
})
export class AddothertasksPageModule {}
