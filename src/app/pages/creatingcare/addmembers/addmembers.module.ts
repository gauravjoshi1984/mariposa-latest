import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmembersPageRoutingModule } from './addmembers-routing.module';

import { AddmembersPage } from './addmembers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmembersPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddmembersPage]
})
export class AddmembersPageModule {}
