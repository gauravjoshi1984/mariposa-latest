import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewassessmentPageRoutingModule } from './previewassessment-routing.module';

import { PreviewassessmentPage } from './previewassessment.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewassessmentPageRoutingModule,
    SharedModule,
  ],
  declarations: [PreviewassessmentPage]
})
export class PreviewassessmentPageModule {}
