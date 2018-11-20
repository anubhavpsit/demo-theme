import { Injectable } from '@angular/core';

@Injectable()
export class VerifyService {

  constructor() { }

  get(r,cb) {
    // Helper service to start ng2-slim-loading-bar progress bar
    const req = new XMLHttpRequest();
    let token = r['token'];
    req.open('GET', 'http://192.168.1.25/ally_backend/public/index.php/api/verify/'+token);
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }
}
