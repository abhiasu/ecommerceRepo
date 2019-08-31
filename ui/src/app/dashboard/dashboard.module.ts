import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashHomeComponent } from './dash-home/dash-home.component';


@NgModule({
  declarations: [DashboardComponent, DashHomeComponent],
  imports: [
    CommonModule,
    ChartsModule,
    DashboardRoutingModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatSidenavModule, MatExpansionModule, MatMenuModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatSidenavModule, MatExpansionModule, MatMenuModule]
})
export class DashboardModule { }
