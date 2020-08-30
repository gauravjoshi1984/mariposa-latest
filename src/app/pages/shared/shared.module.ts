import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddimageComponent } from "./addimage/addimage.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MSelectComponent,
  selectModelComponent,
} from "./m-select/m-select.component";
import { MSelectdateComponent } from "./m-selectdate/m-selectdate.component";
import { MBackbuttonComponent } from "./m-backbutton/m-backbutton.component";
import { PushtoggleComponent } from "./pushtoggle/pushtoggle.component";
import { MHeaderCloseComponent } from "./m-header-close/m-header-close.component";
import { MImageSelectorComponent } from "./m-image-selector/m-image-selector.component";
import { CalenderdateComponent } from "./calenderdate/calenderdate.component";
import { ProfilelistComponent } from "../bookvitals/profilelist/profilelist.component";

@NgModule({
  declarations: [
    AddimageComponent,
    ToggleComponent,
    MSelectComponent,
    selectModelComponent,
    MSelectdateComponent,
    MBackbuttonComponent,
    PushtoggleComponent,
    MHeaderCloseComponent,
    MImageSelectorComponent,
    CalenderdateComponent,
    ProfilelistComponent,
  ],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [
    AddimageComponent,
    ToggleComponent,
    MSelectComponent,
    selectModelComponent,
    MSelectdateComponent,
    MBackbuttonComponent,
    PushtoggleComponent,
    MHeaderCloseComponent,
    MImageSelectorComponent,
    CalenderdateComponent,
    ProfilelistComponent,
  ],
})
export class SharedModule {}
