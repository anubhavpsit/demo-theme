import { Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { VerifyComponent } from './verify/verify.component';
import { LoginComponent } from './login/login.component';
import { VerifymobileComponent } from './verifymobile/verifymobile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: LoginComponent
    }, {
      path: 'login',
      component: LoginComponent
    }, {
      path: 'signin',
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
    }, {
      path: 'verifymobile',
      component: VerifymobileComponent
    }, {
      path: 'resetpassword',
      component: ResetpasswordComponent
    }]
  }
];
