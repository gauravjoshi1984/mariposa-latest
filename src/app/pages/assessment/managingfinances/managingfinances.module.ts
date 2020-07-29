import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagingfinancesPageRoutingModule } from './managingfinances-routing.module';

import { ManagingfinancesPage } from './managingfinances.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagingfinancesPageRoutingModule,
    SharedModule,
  ],
  declarations: [ManagingfinancesPage]
})
export class ManagingfinancesPageModule {}
