import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmealsPageRoutingModule } from './addmeals-routing.module';

import { AddmealsPage } from './addmeals.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmealsPageRoutingModule,
    SharedModule,
  ],
  declarations: [AddmealsPage]
})
export class AddmealsPageModule {}
