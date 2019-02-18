import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

// routes work on first one wins strategy, the one which matches first will be executed first
export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'login', component: LoginComponent
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
  LoginComponent,
  PageNotFoundComponent
];
