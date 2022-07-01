import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrls: ['./step-by-step.component.scss']
})
export class StepByStepComponent implements OnInit {

  @Input() steps = [
   'Step 1',
   'Step 2',
  ];
  
  @Input("index") currentIndex = 0;

  stepTrackBy = (index: number, step: any) => step + index;

  constructor() { }

  ngOnInit(): void {
  }

}
