import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    SharedComponent,
    HomepageComponent
  ],
  imports: [
  ],
  exports: [
    SharedComponent,
    HomepageComponent
  ]
})
export class SharedModule { }
