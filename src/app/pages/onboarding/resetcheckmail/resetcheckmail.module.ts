import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetcheckmailPageRoutingModule } from './resetcheckmail-routing.module';

import { ResetcheckmailPage } from './resetcheckmail.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetcheckmailPageRoutingModule,
    SharedModule,
  ],
  declarations: [ResetcheckmailPage]
})
export class ResetcheckmailPageModule {}
