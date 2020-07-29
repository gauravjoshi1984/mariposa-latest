import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitationsendPageRoutingModule } from './invitationsend-routing.module';

import { InvitationsendPage } from './invitationsend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitationsendPageRoutingModule
  ],
  declarations: [InvitationsendPage]
})
export class InvitationsendPageModule {}
