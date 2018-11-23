import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { AppsettingService } from '../../service/appsetting.service';

@Component({
  selector: 'app-verifymobile',
  templateUrl: './verifymobile.component.html',
  styleUrls: ['./verifymobile.component.scss']
})
export class VerifymobileComponent implements OnInit {

  public form: FormGroup;
  public showLoading: boolean;
  OTP: number;
  mobile: number;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService,private appSetting: AppsettingService) {
    this.showLoading = false;
    //console.log(this.appSetting.mobileNumber);
    console.log(localStorage.getItem("mobile"));
  }

  ngOnInit() {
    this.form = this.fb.group ( {
      OTP: [null , Validators.compose ( [ Validators.required ] )]
    } );

    
  }

  onSubmit() {
    //console.log("aaaa");
    //this.verifymobileService.get();
    console.log(this.OTP);

    if(localStorage.getItem("mobile")==null)
    {
      this.router.navigate ( [ '/' ] );
      //console.log("Invalid mobile number");
    }
    else
    {
      this.router.navigate ( [ '/resetpassword' ] );
    }
  }

  resendOtp() {
    console.log("Resend OTP");
  }
  // onVerify() {
  //   this.showLoading = true;
  //   this.authService.loginUser(this.form.value).subscribe(
  //     data => this.handleData(data),
  //     error => this.handleError(error)
  //   )}

    handleData(data) {
      console.dir("data");
      console.dir(data);
    }
    
    handleError(error) {
      console.dir("error");
      console.dir(error);
    }

}
