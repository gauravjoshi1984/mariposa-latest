import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BloodpressuredetailedviewPageRoutingModule } from "./bloodpressuredetailedview-routing.module";

import { BloodpressuredetailedviewPage } from "./bloodpressuredetailedview.page";
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodpressuredetailedviewPageRoutingModule,
    NgApexchartsModule,
  ],
  declarations: [BloodpressuredetailedviewPage],
})
export class BloodpressuredetailedviewPageModule {}
