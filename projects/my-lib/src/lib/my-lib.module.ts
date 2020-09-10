import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import {TheButtonComponent} from './the-button/the-button.component';



@NgModule({
  declarations: [MyLibComponent, TheButtonComponent],
  imports: [
  ],
  exports: [MyLibComponent, TheButtonComponent]
})
export class MyLibModule { }
