import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  loginUser(data) {
    return this.http.post('http://192.168.1.25/ally_backend/public/index.php/api/login', data );
  }  

}
