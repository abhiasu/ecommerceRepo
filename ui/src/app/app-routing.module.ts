import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }  from './auth/auth.guard';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //{path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  { path: 'dashboard',  loadChildren: "../app/dashboard/dashboard.module#DashboardModule", canActivate: [AuthGuard] },
  { path:'login', component:AdminLoginComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
