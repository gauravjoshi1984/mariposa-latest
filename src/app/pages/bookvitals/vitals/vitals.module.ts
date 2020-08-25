import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { VitalsPageRoutingModule } from "./vitals-routing.module";

import { VitalsPage } from "./vitals.page";
import { NgApexchartsModule } from "ng-apexcharts";
import { AddvitalComponent } from "./addvital/addvital.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VitalsPageRoutingModule,
    NgApexchartsModule,
    SharedModule,
  ],
  declarations: [VitalsPage, AddvitalComponent],
})
export class VitalsPageModule {}
