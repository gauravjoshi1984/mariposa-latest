import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditbathingPageRoutingModule } from './editbathing-routing.module';

import { EditbathingPage } from './editbathing.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditbathingPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [EditbathingPage]
})
export class EditbathingPageModule {}
