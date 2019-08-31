import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const getToken = sessionStorage.getItem('currentUser');
    const tokenPasrse = JSON.parse(getToken);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': tokenPasrse.userToken
        'x-auth-token': tokenPasrse.userToken
      })
    };

    const httpOptionsFile = {
      headers: new HttpHeaders({
        //'Content-Type':  'application/json',
        //'Authorization': tokenPasrse.userToken
        'x-auth-token': tokenPasrse.userToken
      })
    };

@Injectable()
export class UsersService {

  loginUrl = "http://localhost:3000/api/users";
  getusersUrl = 'http://localhost:3000/api/users';
  delusersUrl = 'http://localhost:3000/api/users';
  putuserurl ='http://localhost:3000/api/users';

  constructor(private http: HttpClient,) { }

  

  adduser(userdata, selectedFile: File):Observable<any>{
    const formData:FormData = new FormData();
    formData.append('firstname', userdata.firstname);
    formData.append('lastname', userdata.lastname);
    formData.append('email', userdata.email);
    formData.append('password', userdata.password);
    formData.append('profileImg', selectedFile, selectedFile.name);
    
    //userdata['profileImg'] = formData;
    //console.log(datawithimage);
    return this.http.post<any>(this.loginUrl, formData, httpOptionsFile)
            .pipe(
             // catchError(this.handleError)
            );
  }
  

  getusers():Observable<any>{
    return this.http.get<any>(this.getusersUrl, httpOptions)
          .pipe(
            catchError(this.handleError)
          );
  }

  deleteusers(id: number):Observable<{}>{
    return this.http.delete<any>(this.delusersUrl+'/'+id, httpOptions)
          .pipe(
            catchError(this.handleError)
          );
  }

  getedituser(id){
    return this.http.get<any>(this.getusersUrl+'/'+id, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  edituser(userdata, id:number):Observable<{}>{
    return this.http.put<any>(this.putuserurl+'/'+id, userdata, httpOptions)
            .pipe(
              catchError(this.handleError)
            )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
}
