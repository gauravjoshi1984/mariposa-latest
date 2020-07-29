import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssessmentcompletePageRoutingModule } from './assessmentcomplete-routing.module';

import { AssessmentcompletePage } from './assessmentcomplete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssessmentcompletePageRoutingModule
  ],
  declarations: [AssessmentcompletePage]
})
export class AssessmentcompletePageModule {}
