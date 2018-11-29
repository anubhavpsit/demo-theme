import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../auth/token.service';

@Injectable()
export class JarwisService {

  private baseUrl = 'http://app.ally.com/api';
  httpOptions: any;

  constructor(private http: HttpClient, private Token: TokenService) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.Token.get()
      })
    };
  }

  // Signup
  signup(data) {
    return this.http.post(`${this.baseUrl}/register`, data );
  }

  // login
  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data );
  }

  loginUser(data) {
    return this.http.post(`${this.baseUrl}/login`, data );
    //return this.http.post('http://192.168.1.25/ally_backend/public/index.php/api/login', data );
  }

  sendPasswordResetLink(data) {
    console.dir(data);
    console.dir(this.httpOptions);
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
    //return this.http.post('http://192.168.1.25/ally_backend/public/index.php/api/login', data );
  }

  changePassword(data) {
    console.dir("SASASA");
    return this.http.post(`${this.baseUrl}/resetPassword`, data);
    //return this.http.post('http://192.168.1.25/ally_backend/public/index.php/api/login', data );
  }

  logout(data) {
    console.dir("data.token " + data.token);
    const headerDict = {
      'Authorization': 'Bearer ' + data.token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    return this.http.post(`${this.baseUrl}/logout`, {}, requestOptions );
    //return this.http.post('http://192.168.1.25/ally_backend/public/index.php/api/login', data );
  }

  test(data) {
    console.dir("data.token " + data.token);
    const headerDict = {
      'Authorization': 'Bearer ' + data.token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    //return this.http.get(`${this.baseUrl}/test`, requestOptions );
    return this.http.get(`${this.baseUrl}/test`);
  }
  


  rest(data) {

   // console.dir("data.token " + data.token);
    const headerDict = {
      'Content-Type': 'application/json'
    }
    
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
      withCredentials: true
    };
    
    return this.http.get(`${this.baseUrl}/rest`, requestOptions );

  }
}



