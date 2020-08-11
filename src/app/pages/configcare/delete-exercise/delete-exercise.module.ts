import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteExercisePageRoutingModule } from './delete-exercise-routing.module';

import { DeleteExercisePage } from './delete-exercise.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteExercisePageRoutingModule,
    SharedModule,
  ],
  declarations: [DeleteExercisePage]
})
export class DeleteExercisePageModule {}
