import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignshoppinglistPageRoutingModule } from './assignshoppinglist-routing.module';

import { AssignshoppinglistPage } from './assignshoppinglist.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignshoppinglistPageRoutingModule,
    SharedModule,
  ],
  declarations: [AssignshoppinglistPage]
})
export class AssignshoppinglistPageModule {}
