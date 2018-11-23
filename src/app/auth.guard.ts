import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './service/auth/auth.service';
import { TokenService } from './service/auth/token.service';

@Injectable()
export class AuthGuard implements CanActivate {

  // add the service we need
  constructor(
    private auth: AuthService,
    private Token:TokenService,
    private router: Router
  ) { console.dir("CALLED AUTH GAURD"); }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // handle any redirects if a user isn't authenticated
      if (!this.Token.loggedIn()) {
        console.dir("User is not logged in");
        // redirect the user
        this.router.navigate(['/']);
        return false;
    }
    console.dir("User is logged in");
    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (!this.Token.loggedIn()) {
        console.dir("User is not logged in");
        // redirect the user
        this.router.navigate(['/']);
        return false;
    }
    console.dir("User is logged in");
    return true;
  }

}