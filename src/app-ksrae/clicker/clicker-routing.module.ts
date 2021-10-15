import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickerComponent } from './clicker.component';

const routes: Routes = [{ path: '', component: ClickerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickerRoutingModule { }
