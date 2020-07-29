import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MealsPageRoutingModule } from "./meals-routing.module";

import { MealsPage } from "./meals.page";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealsPageRoutingModule,
    SharedModule,
  ],
  declarations: [MealsPage],
})
export class MealsPageModule {}
