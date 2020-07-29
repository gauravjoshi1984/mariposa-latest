import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleExercisePageRoutingModule } from './schedule-exercise-routing.module';

import { ScheduleExercisePage } from './schedule-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleExercisePageRoutingModule
  ],
  declarations: [ScheduleExercisePage]
})
export class ScheduleExercisePageModule {}
