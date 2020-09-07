import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddimageComponent } from './addimage/addimage.component';
import { ToggleComponent } from './toggle/toggle.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MSelectComponent,
  selectModelComponent,
} from './m-select/m-select.component';
import { MSelectdateComponent } from './m-selectdate/m-selectdate.component';
import { MBackbuttonComponent } from './m-backbutton/m-backbutton.component';
import { PushtoggleComponent } from './pushtoggle/pushtoggle.component';
import { MHeaderCloseComponent } from './m-header-close/m-header-close.component';
import { MImageSelectorComponent } from './m-image-selector/m-image-selector.component';
import { CalenderdateComponent } from './calenderdate/calenderdate.component';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ProfilelistComponent } from "../bookvitals/profilelist/profilelist.component"
import { TabHeaderComponent } from "./tab-header/tab-header.component";
import { RouterModule } from "@angular/router";
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
    TabHeaderComponent,

  ],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule, RouterModule,],
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
    TabHeaderComponent,
  ],
  providers: [PhotoViewer]
})
export class SharedModule {}
