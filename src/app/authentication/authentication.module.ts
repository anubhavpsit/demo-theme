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
import { SpinnerModule } from 'ng-spinner';
import { AuthService } from '../service/auth/auth.service';
import { TokenService } from '../service/auth/token.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule
  ],
  declarations: [SigninComponent, SignupComponent, ForgotComponent, LockscreenComponent, VerifyComponent],
  providers: [VerifyService,AuthService,TokenService]
})

export class AuthenticationModule {}
