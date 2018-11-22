import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
//import { AfterLoginService } from '../service/after-login.service';

export const DashboardRoutes: Routes = [{
  path: '',
  component: DashboardComponent,
  //canActivate: [AfterLoginService],
  data: {
    heading: 'Dashboard'
  }
}];
