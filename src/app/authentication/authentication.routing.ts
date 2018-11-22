import { Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { VerifyComponent } from './verify/verify.component';
import { BeforeLoginService } from '../service/before-login.service';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: SigninComponent,
      //canActivate: [BeforeLoginService]
    }, {
      path: 'signin',
      component: SigninComponent,
      //canActivate: [BeforeLoginService]
    }, {
      path: 'logout',
      component: SigninComponent
    }, {
      path: 'signup',
      component: SignupComponent,
      //canActivate: [BeforeLoginService]
    }, {
      path: 'forgot',
      component: ForgotComponent
    }, {
      path: 'lockscreen',
      component: LockscreenComponent
    }, {
      path: 'verify/:token',
      component: VerifyComponent
    }]
  }
];
