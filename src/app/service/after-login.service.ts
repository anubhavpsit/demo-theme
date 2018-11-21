import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './auth/token.service';

@Injectable()
export class AfterLoginService implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    //throw new Error("Method not implemented");
    return this.Token.loggedIn();
   }

  constructor(private Token:TokenService) { }

}
