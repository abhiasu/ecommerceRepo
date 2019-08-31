import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import{ UsersService } from '../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  courseId;
  loginform: FormGroup;
  // loginError:string;
   loginloader:boolean = false;
   loginError:string;
  getuserData: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersservice: UsersService,
    private fb: FormBuilder
  ) {
   // let id = this.route.snapshot.paramMap.get('id');
  
    this.route.params.subscribe(
      params =>{
          this.courseId = params['id'];
      }
  );
   }

  ngOnInit() {
   
      this.usersservice.getedituser(this.courseId)
      .subscribe(
        res => {
          //console.log(res);
          this.getuserData = res;
          this.formdata(res);
        },
        error =>{
          console.log(error);
        }
      )

     this.formdata("");
   
  }

  formdata(res:any){
    console.log(res);
    
    this.loginform  = this.fb.group({
      firstname: [res.firstname, [Validators.required]],
      lastname: [res.lastname, [Validators.required]],
      email: [res.email, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    }); 
  }

  get firstname() {
    return this.loginform.get('firstname');
  }

  get lastname() {
    return this.loginform.get('lastname');
  }
  get email() {
    return this.loginform.get('email');
  }

  get password() {
    return this.loginform.get('password');
  }


  onSubmit() {
  
    this.loginError = '';
    this.loginloader = true;
     //console.log(this.loginform.value);
     this.usersservice.edituser(this.loginform.value, this.courseId)
    .subscribe(
      res => {
       // console.log(res);
       if(res){
        console.log(res);
         // this.loginError = false;
         this.loginloader = false;
         alert('User Updated Successfully!');
        this.loginform.reset();
       }else{
            //this.loginError = true;
           this.loginloader = false;
        }
      },
      error => {
          console.log(error);
          this.loginError = error.error.error;
           this.loginloader = false;
       }
    );
    }

}
