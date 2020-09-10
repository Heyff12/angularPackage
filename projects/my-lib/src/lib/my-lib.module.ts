import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import {MyTheButtonComponent} from './the-button/the-button.component';



@NgModule({
  declarations: [MyLibComponent, MyTheButtonComponent],
  imports: [
  ],
  exports: [MyLibComponent, MyTheButtonComponent]
})
export class MyLibModule { }
