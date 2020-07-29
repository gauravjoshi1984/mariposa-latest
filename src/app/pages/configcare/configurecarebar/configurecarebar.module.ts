import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurecarebarPageRoutingModule } from './configurecarebar-routing.module';

import { ConfigurecarebarPage } from './configurecarebar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurecarebarPageRoutingModule
  ],
  declarations: [ConfigurecarebarPage]
})
export class ConfigurecarebarPageModule {}
