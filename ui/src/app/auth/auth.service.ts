import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { tap, delay } from 'rxjs/operators';


export interface login {
  username: string;
  userpassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  loginUrl = 'http://localhost:3000/api/auth';
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  redirectUrl: string;

  

  login(logindata: login): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
       // 'Authorization': 'my-auth-token'
      })
    };
    
    console.log(httpOptions)
    return this.http.post<any>(this.loginUrl, logindata, httpOptions)
        .pipe(
          map(user => {
            console.log(user);
            // login successful if there's a jwt token in the response
             if (user && user.token) {
            //     // store user details and jwt token in local storage to keep user logged in between page refreshes
                 sessionStorage.setItem('currentUser', JSON.stringify({"userToken": user.token, "username": user.username, "userimg":user.userimg}));
             }

             return user;
        }),
        delay(500),
   tap(val => this.isLoggedIn = true)
        );

        // logout(): void {
        //   sessionStorage.removeItem("currentUser");
        //   this.isLoggedIn = false;
        //   this.router.navigate(['/login']);
        // }
}

logoutuser(){
  sessionStorage.removeItem("currentUser");
  this.router.navigate(['/login']);
}

  
  
}
