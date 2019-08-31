import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { AddUserComponent } from '../users/add-user/add-user.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
	{
	path:'',
	component: UsersComponent,
	children:[
		{
            path: 'add-user',
            component: AddUserComponent,
            // children:[
            //   {path:'add-user', component:AddUserComponent},
            //   {path:'user-details', component:UsersDetailsComponent}
            // ]
          },
          {path:'user-details', component:UsersDetailsComponent},
          {path:'edit-user/:id', component:EditUserComponent} 
		]	
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
