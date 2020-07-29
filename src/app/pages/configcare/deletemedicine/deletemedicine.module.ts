import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletemedicinePageRoutingModule } from './deletemedicine-routing.module';

import { DeletemedicinePage } from './deletemedicine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletemedicinePageRoutingModule
  ],
  declarations: [DeletemedicinePage]
})
export class DeletemedicinePageModule {}
