import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssessmentbarPageRoutingModule } from './assessmentbar-routing.module';

import { AssessmentbarPage } from './assessmentbar.page';
import { PopoverComponent } from './popover/popover.component';
import { SharedModule } from '../../shared/shared.module';
import { DeleteassesmentmodalComponent } from './deleteassesmentmodal/deleteassesmentmodal.component';

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AssessmentbarPageRoutingModule,
    SharedModule,
  ],
  declarations: [AssessmentbarPage, PopoverComponent, DeleteassesmentmodalComponent]
})
export class AssessmentbarPageModule {}
