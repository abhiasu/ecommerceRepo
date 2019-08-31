import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import { AuthService }      from '../auth/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginform: FormGroup;
  loginError:string;
  loginloader:boolean = false;

  constructor(
    private fb: FormBuilder,
  	private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.loginform  = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });  
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
  this.authService.login(this.loginform.value)
.subscribe(
  res => {
    if(res && res.statusCode == 200){
    //console.log(res);
      this.router.navigate(['/dashboard']);
     // this.loginError = false;
     this.loginloader = false;
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
