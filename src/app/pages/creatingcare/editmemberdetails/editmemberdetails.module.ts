import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditmemberdetailsPageRoutingModule } from './editmemberdetails-routing.module';

import { EditmemberdetailsPage } from './editmemberdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditmemberdetailsPageRoutingModule
  ],
  declarations: [EditmemberdetailsPage]
})
export class EditmemberdetailsPageModule {}
