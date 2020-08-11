import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpostPageRoutingModule } from './addpost-routing.module';

import { AddpostPage } from './addpost.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpostPageRoutingModule,
    SharedModule,
  ],
  declarations: [AddpostPage]
})
export class AddpostPageModule {}
