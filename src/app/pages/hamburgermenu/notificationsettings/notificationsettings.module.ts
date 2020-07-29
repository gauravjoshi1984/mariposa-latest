import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsettingsPageRoutingModule } from './notificationsettings-routing.module';

import { NotificationsettingsPage } from './notificationsettings.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsettingsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [NotificationsettingsPage]
})
export class NotificationsettingsPageModule {}
