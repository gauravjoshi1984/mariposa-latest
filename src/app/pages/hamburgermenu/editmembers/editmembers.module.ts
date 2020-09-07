import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditmembersPageRoutingModule } from './editmembers-routing.module';

import { EditmembersPage } from './editmembers.page';
import { SharedModule } from '../../shared/shared.module';
import { DeleteconfirmComponent } from './deleteconfirm/deleteconfirm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditmembersPageRoutingModule,
    SharedModule,
  ],
  declarations: [EditmembersPage, DeleteconfirmComponent]
})
export class EditmembersPageModule {}
