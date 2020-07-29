import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditmemberPageRoutingModule } from './editmember-routing.module';

import { EditmemberPage } from './editmember.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditmemberPageRoutingModule,
    SharedModule,
  ],
  declarations: [EditmemberPage]
})
export class EditmemberPageModule {}
