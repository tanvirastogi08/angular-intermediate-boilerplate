import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardGuard } from '@employee-portal-core/guard/auth-guard.guard';

import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'employees',
        component: EmployeesComponent,
      },
      {
        path: 'employees/:id',
        component: EmployeeDetailComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(dashboardRoutes)],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule {}

export const routableComponents = [
  HomeComponent,
  EmployeesComponent,
  EmployeeDetailComponent
];
