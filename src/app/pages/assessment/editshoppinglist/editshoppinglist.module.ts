import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditshoppinglistPageRoutingModule } from './editshoppinglist-routing.module';

import { EditshoppinglistPage } from './editshoppinglist.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditshoppinglistPageRoutingModule,
    SharedModule,
  ],
  declarations: [EditshoppinglistPage]
})
export class EditshoppinglistPageModule {}
