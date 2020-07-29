import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BathingPageRoutingModule } from "./bathing-routing.module";

import { BathingPage } from "./bathing.page";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BathingPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [BathingPage],
})
export class BathingPageModule {}
