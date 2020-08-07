import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddexercisePageRoutingModule } from './addexercise-routing.module';

import { AddexercisePage } from './addexercise.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddexercisePageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [AddexercisePage]
})
export class AddexercisePageModule {}
