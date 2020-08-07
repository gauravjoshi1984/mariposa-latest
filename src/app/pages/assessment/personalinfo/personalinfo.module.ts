import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalinfoPageRoutingModule } from './personalinfo-routing.module';

import { PersonalinfoPage } from './personalinfo.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalinfoPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [PersonalinfoPage]
})
export class PersonalinfoPageModule {}
