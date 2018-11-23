import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TokenService } from './token.service';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  //private loggedIn = new BehaviorSubject < boolean >(this.Token.loggedIn());
  //authStatus = this.loggedIn.asObservable();
  //private loggedIn:boolean;
  public loggedInStatus = false;

  constructor(private Token: TokenService) {
    //this.loggedIn = false;
    // console.dir("authStatus");
    // console.dir(this.authStatus);
    // console.dir("loggedIn");
    // console.dir(this.loggedIn); 
  }

  // changeAuthStatus(value: boolean) {
  //   //this.loggedIn.next(value);
  // }
    get isLoggedIn() {
      //return this.loggedInStatus;
      return false;
    }
    
    setLoggedIn(value: boolean) {
      console.dir("User logged in set to " + value);
      this.loggedInStatus = value;
    }


  
}
