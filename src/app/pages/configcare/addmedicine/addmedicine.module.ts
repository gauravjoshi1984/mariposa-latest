import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddmedicinePageRoutingModule } from "./addmedicine-routing.module";

import { AddmedicinePage } from "./addmedicine.page";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmedicinePageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [AddmedicinePage],
})
export class AddmedicinePageModule {}
