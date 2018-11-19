import { Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { VerifyComponent } from './verify/verify.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: SigninComponent
    }, {
      path: 'signin',
      component: SigninComponent
    }, {
      path: 'logout',
      component: SigninComponent
    }, {
      path: 'signup',
      component: SignupComponent
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
