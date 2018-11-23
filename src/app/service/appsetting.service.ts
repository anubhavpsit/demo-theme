import { Injectable } from '@angular/core';

@Injectable()
export class AppsettingService {

  public static API_ENDPOINT='http://127.0.0.1:6666/api/';
  public mobileNumber=null;
  constructor() { }

}
