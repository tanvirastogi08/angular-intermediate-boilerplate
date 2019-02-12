import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '@employee-portal-core/core.module';
import { SharedModule } from '@employee-portal-shared/shared.module';
=======
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule, routableComponents } from './app-routing.modules';
>>>>>>> 5f267ad3d3f60d76acef8491b6c78aa366830c57

import { AppModuleService } from './app-module.service';
import { AppRoutingModule, routableComponents } from './app-routing.modules';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
