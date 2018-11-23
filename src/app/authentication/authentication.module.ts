import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutes } from './authentication.routing';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { VerifyComponent } from './verify/verify.component';
import { VerifyService } from '../service/verify/verify.service';
import { AuthService } from '../service/auth/auth.service';
import { LoginComponent } from './login/login.component';
import { VerifymobileComponent } from './verifymobile/verifymobile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VerifymobileService } from '../service/verifymobile.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SigninComponent, SignupComponent, ForgotComponent, LockscreenComponent, VerifyComponent, LoginComponent, VerifymobileComponent, ResetpasswordComponent],
  providers: [VerifyService,AuthService,VerifymobileService]
})

export class AuthenticationModule {}
