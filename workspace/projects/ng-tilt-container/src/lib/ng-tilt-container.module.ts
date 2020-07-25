// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { NgTiltContainerComponent } from './ng-tilt-container/ng-tilt-container.component';
/* --------------------------------------------------------------------------------- */

@NgModule({
  declarations: [NgTiltContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [NgTiltContainerComponent]
})
export class NgTiltContainerModule { }
