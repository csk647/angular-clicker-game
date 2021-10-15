import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickerRoutingModule } from './clicker-routing.module';
import { ClickerComponent } from './clicker.component';


@NgModule({
  declarations: [
    ClickerComponent
  ],
  imports: [
    CommonModule,
    ClickerRoutingModule
  ]
})
export class ClickerModule { }
