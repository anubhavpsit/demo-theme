import { Injectable } from '@angular/core';

@Injectable()
export class PagingService {

  constructor() { }

  fetch(r, cb) {
    const req = new XMLHttpRequest();
    let pageNumber = r['offset'] + 1;
    req.open('GET', 'https://reqres.in/api/users?page='+pageNumber);
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    setTimeout(function(){
     //this.aniloading.showloader=false;
      req.send();
    }, 3000);
    
  }

}
