import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@employee-portal-core/core.module';
import { SharedModule } from '@employee-portal-shared/shared.module';
import { DasboardModuleService } from './dashboard-module.service';

import { DashboardRoutingModule, routableComponents } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    routableComponents
  ],
  providers: [
    DasboardModuleService
  ]
})
export class DashboardModule { }
