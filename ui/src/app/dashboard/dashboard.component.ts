import { Component, OnInit } from '@angular/core';
import { AuthService }      from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  getusername;
  userimg;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    const getusername = JSON.parse(sessionStorage.getItem('currentUser'));
    this.getusername = getusername.username;
    this.userimg = getusername.userimg;
    
  }

  logoutuser(){
    this.authservice.logoutuser();
  }

}
