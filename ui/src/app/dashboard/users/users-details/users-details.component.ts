import { Component, OnInit } from '@angular/core';
import{ UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  getuserData:any;
  message:string;

  constructor(private userdetails:UsersService, private router:Router) { }

  ngOnInit() {
    this.getAllusers();
  }

  getAllusers(){
    this.userdetails.getusers()
    .subscribe(
      res => {
        //console.log(res);
        this.getuserData = res;
      },
      error =>{
        console.log(error);
      }
    )
  }

  deleteuser(id){
    const x = confirm("Are you sure you want to delete?");
      if (x){
          this.userdetails.deleteusers(id)
          .subscribe(
            (res:any) =>{
              if(res){
                //this.message = res.message;
                alert(res.message);
                this.getAllusers();
              }
            },
            error =>{
              console.log(error);
              alert(error);
            }
          )
          return true;
        }
      else{
        return false;
    }
    
  }

  edituser(id){
    alert(id);
    this.router.navigate(['/dashboard/users/edit-user/', id]);
  }

}
