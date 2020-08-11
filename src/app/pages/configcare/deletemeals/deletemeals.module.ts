import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletemealsPageRoutingModule } from './deletemeals-routing.module';

import { DeletemealsPage } from './deletemeals.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletemealsPageRoutingModule,
    SharedModule,
  ],
  declarations: [DeletemealsPage]
})
export class DeletemealsPageModule {}
