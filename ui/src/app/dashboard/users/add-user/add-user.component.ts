import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import{ UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  loginform: FormGroup;
  // loginError:string;
   loginloader:boolean = false;
   loginError:string;

   selectedFile:File = null;
   imageUrl: string;

  constructor(
    private fb: FormBuilder,
    private adduser:UsersService
  ) { }

  ngOnInit() {
    this.loginform  = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      profileImg:['']
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

  get profileImg() {
    return this.loginform.get('profileImg');
  }

onSubmit() {
  
this.loginError = '';
this.loginloader = true;
 //console.log(this.loginform.value);
 this.adduser.adduser(this.loginform.value, this.selectedFile)
.subscribe(
  res => {
   if(res && res.statusCode == 200){
    console.log(res);
     // this.loginError = false;
     this.loginloader = false;
     alert('User added successfully!');
    this.loginform.reset();
    this.imageUrl='';
   }else{
        //this.loginError = true;
       this.loginloader = false;
    }
  },
  error => {
      //console.log(error);
      this.loginError = error.error.error;
       this.loginloader = false;
   }
);
}

onFileSelected(files: FileList){
  this.imageUrl='';
  this.selectedFile = files.item(0);
   
  //show the image preview
  let reader = new FileReader();
  reader.onload = (event:any) => {
    this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.selectedFile);
   console.log(this.selectedFile);
}

}
