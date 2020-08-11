import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletebeautyPageRoutingModule } from './deletebeauty-routing.module';

import { DeletebeautyPage } from './deletebeauty.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletebeautyPageRoutingModule,
    SharedModule,
  ],
  declarations: [DeletebeautyPage]
})
export class DeletebeautyPageModule {}
