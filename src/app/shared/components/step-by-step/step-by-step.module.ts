import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepByStepComponent } from './step-by-step.component';



@NgModule({
  declarations: [
    StepByStepComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StepByStepComponent
  ]
})
export class StepByStepModule { }
