import { NgModule } from '@angular/core';
import { SharedModule } from '@employee-portal-shared/shared.module';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
  HeaderComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    /*
      All the declarations, imports that we want to use in other modules as well,
      All these can be used directly just by importing this CoreModule
    */
   HeaderComponent
  ],
  providers: [
    /*
      All the Services that are to be shared throughout the application.
      Not needed in Angular6
    */
  ]
})
export class CoreModule { }
