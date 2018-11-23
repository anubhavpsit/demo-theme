import { Injectable } from '@angular/core';
import { AppsettingService } from './appsetting.service';

@Injectable()
export class VerifymobileService {

  public test = false;
  constructor() {
    
   }

   get(r,cb) {
    let mobileNumber = r['mobile'];
    let caseNumber = r['caseNumber'];

    const req = new XMLHttpRequest();
    //req.open('GET',AppsettingService.API_ENDPOINT+mobileNumber+'/'+caseNumber);
    if(caseNumber == 1) {
      req.open('GET','https://reqres.in/api/users?page=1');
      req.onload = () => {
        var res = '{"success":1,"data":{"mobile_number":"'+mobileNumber+'","user_status":0},"message":"Mobile number not registered"}';
        cb(JSON.parse(res));
      };  
      req.send();
    } else if(caseNumber == 2) {
      req.open('GET','https://reqres.in/api/users?page=1');
      req.onload = () => {
        var res = '{"success":1,"data":{"mobile_number":"'+mobileNumber+'","user_status":2},"message":"User not active"}';
        cb(JSON.parse(res));
      }; 
      req.send(); 
    }else if(caseNumber == 3) {
      req.open('GET','https://reqres.in/api/users?page=1');
      req.onload = () => {
        var res = '{"success":1,"data":{"mobile_number":"'+mobileNumber+'","user_status":3},"message":"User active"}';
        cb(JSON.parse(res));
      }; 
      req.send();
    
    //console.dir(AppsettingService.API_ENDPOINT);
  }
   }
}
