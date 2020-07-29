import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanionshipPageRoutingModule } from './companionship-routing.module';

import { CompanionshipPage } from './companionship.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanionshipPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [CompanionshipPage]
})
export class CompanionshipPageModule {}
