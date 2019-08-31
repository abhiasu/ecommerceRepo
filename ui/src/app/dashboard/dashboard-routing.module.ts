import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashHomeComponent } from './dash-home/dash-home.component';

import { AuthGuard }  from '../auth/auth.guard';

const routes: Routes = [
  { path: "",
  component: DashboardComponent, canActivate: [AuthGuard],
  
  children: [{
              path: '',
              component: DashHomeComponent
           }, 
            {
              path: 'users',
              loadChildren: '../dashboard/users/users.module#UsersModule',
            }//,
          //   {
          //     path: 'news',
          //     loadChildren: '../dashboard/news/news-center.module#NewsCenterModule',
          //     data: { preload: true }
          //   },
          //   {
          //     path: 'cars',
          //     loadChildren: '../dashboard/cars/cars.module#CarsModule',
          //     data: { preload: true }
          //   }
          ]
}
  //{ path: "dashboard-home", component: DashHomeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
