import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteExercisePageRoutingModule } from './delete-exercise-routing.module';

import { DeleteExercisePage } from './delete-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteExercisePageRoutingModule
  ],
  declarations: [DeleteExercisePage]
})
export class DeleteExercisePageModule {}
