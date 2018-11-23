import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {


  private iss = {
    'login' : 'http://app.ally.com/api/login',
    'register' : 'http://app.ally.com/api/register',
  }
  constructor() { }

  handle(token) {
    this.set(token);
  }

  set(token) {
      localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }


  isValid() {
    const token = this.get();
    if(token) {
      const payload = this.payload(token);
      if(payload) {
        //return payload.iss === 'http://app.ally.com/api/login' ? true: false
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true: false
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }


  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    let isUserValid = this.isValid();
    console.dir("User is loggred in " + isUserValid);
    return isUserValid;
  }
}
