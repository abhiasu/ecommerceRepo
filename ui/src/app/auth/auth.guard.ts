import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }


  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    //if (this.authService.isLoggedIn) { return true; }
    const getToken = sessionStorage.getItem('currentUser');
    const tokenPasrse = JSON.parse(getToken);
    console.log("------",tokenPasrse);
    if(tokenPasrse && tokenPasrse.userToken){
      if(tokenPasrse.username==="admin"){
        this.router.navigate(['/dashboard']);
          return true;
      }else{
         this.router.navigate(['/loginyt']);
          return false;
      }
    
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;


    this.router.navigate(['/login']);
    return false;
  }
}