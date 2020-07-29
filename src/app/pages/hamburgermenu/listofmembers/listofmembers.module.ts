import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListofmembersPageRoutingModule } from './listofmembers-routing.module';

import { ListofmembersPage } from './listofmembers.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListofmembersPageRoutingModule,
    SharedModule,
  ],
  declarations: [ListofmembersPage]
})
export class ListofmembersPageModule {}
