import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TokenService } from './token.service';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject < boolean >(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  
  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  constructor(private Token: TokenService) {
    console.dir("authStatus");
    console.dir(this.authStatus);
    console.dir("loggedIn");
    console.dir(this.loggedIn); 
  }
  

}
