import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletemealsPageRoutingModule } from './deletemeals-routing.module';

import { DeletemealsPage } from './deletemeals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletemealsPageRoutingModule
  ],
  declarations: [DeletemealsPage]
})
export class DeletemealsPageModule {}
