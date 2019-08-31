import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from '../users/services/users.service';

import { UsersComponent } from './users.component';
import { AddUserComponent } from '../users/add-user/add-user.component';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [UsersComponent, AddUserComponent, UsersDetailsComponent, EditUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    FileUploadModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatSidenavModule, MatExpansionModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatSidenavModule, MatExpansionModule],
  providers:[UsersService]
})
export class UsersModule { }
