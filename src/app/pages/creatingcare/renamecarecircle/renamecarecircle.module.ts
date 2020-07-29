import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenamecarecirclePageRoutingModule } from './renamecarecircle-routing.module';

import { RenamecarecirclePage } from './renamecarecircle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenamecarecirclePageRoutingModule
  ],
  declarations: [RenamecarecirclePage]
})
export class RenamecarecirclePageModule {}
