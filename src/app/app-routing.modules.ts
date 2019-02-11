import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuardGuard } from './core/guard/auth-guard.guard';

// routes work on first one wins strategy, the one which matches first will be executed first
export const appRoutes: Routes = [
  {
    path: 'employees', component: EmployeesComponent
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

export const routableComponents = [
  HomeComponent,
  EmployeesComponent,
  EmployeeDetailComponent,
  PageNotFoundComponent
];
