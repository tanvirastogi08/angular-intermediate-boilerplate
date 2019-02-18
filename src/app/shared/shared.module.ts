import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddCharacterPipe } from './pipes/add-character.pipe';
import { CsatComponent } from './components/csat/csat.component';

@NgModule({
  declarations: [
    AddCharacterPipe,
    CsatComponent
  /*
    All the components declarations should go here
    Like shared Directives, Components, Pipes, Validators etc.
  */
  ],
  imports: [
    /* The CommonModule includes all the basic Angular directives
     like: NgIf, NgForOf
    */
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AddCharacterPipe,
    CsatComponent
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
