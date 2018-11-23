import { Injectable } from '@angular/core';
import { AppsettingService } from './appsetting.service';

@Injectable()
export class VerifymobileService {

  constructor() {
    
   }

   get() {
    // Helper service to start ng2-slim-loading-bar progress bar
    console.dir(AppsettingService.API_ENDPOINT);
  }

}
