import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurecarebarPageRoutingModule } from './configurecarebar-routing.module';

import { ConfigurecarebarPage } from './configurecarebar.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurecarebarPageRoutingModule,
    SharedModule,
  ],
  declarations: [ConfigurecarebarPage]
})
export class ConfigurecarebarPageModule {}
