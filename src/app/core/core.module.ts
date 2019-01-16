import { NgModule } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
  /*
    All the components declarations should go here
  */
  ],
  imports: [
  /*
    All the modules should be imported first
  */
  ],
  exports: [
    /*
      All the declarations, imports that we want to use in other modules as well,
      All these can be used directly just by importing this CoreModule
    */
  ],
  providers: [
    /*
      All the Services that are to be shared throughout the application.
      Not needed in Angular6
    */
  ]
})
export class CoreModule { }
