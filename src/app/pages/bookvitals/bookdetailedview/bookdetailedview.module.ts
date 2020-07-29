import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookdetailedviewPageRoutingModule } from './bookdetailedview-routing.module';

import { BookdetailedviewPage } from './bookdetailedview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookdetailedviewPageRoutingModule
  ],
  declarations: [BookdetailedviewPage]
})
export class BookdetailedviewPageModule {}
