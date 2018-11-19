import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JarwisService {

  private baseUrl = 'http://app.ally.com/api';
  constructor(private http: HttpClient) { }
  // Signup
  signup(data) {
    return this.http.post(`${this.baseUrl}/register`, data );
  }

  // login
  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data );
  }
}
