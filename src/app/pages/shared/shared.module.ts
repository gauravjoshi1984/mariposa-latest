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

@NgModule({
  declarations: [
    AddimageComponent,
    ToggleComponent,
    MSelectComponent,
    selectModelComponent,
    MSelectdateComponent,
    MBackbuttonComponent,
    PushtoggleComponent,

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
  ],
})
export class SharedModule {}
