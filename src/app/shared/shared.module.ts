import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  /*
    All the components declarations should go here
    Like shared Directives, Components, Pipes, Validators etc.
  */
  ],
  imports: [
    /* The CommonModule includes all the basic Angular directives
     like: NgIf, NgForOf
    */
    CommonModule
  ],
  exports: [
    CommonModule
  ],
  providers: [
    /*
      All the Services that are to be shared throughout the application.
      Remember: The services provided here works with a single instance
      of the Service in the application
    */
  ]
})
export class SharedModule { }
