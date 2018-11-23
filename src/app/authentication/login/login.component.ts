import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { VerifymobileService } from '../../service/verifymobile.service';
import { AppsettingService } from '../../service/appsetting.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public caseNumber: number;
  public form: FormGroup;
  public showLoading: boolean;
  mobile: number;
  //public mobileNumber: number;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService,private verifymobileService: VerifymobileService,private appSetting: AppsettingService) {
    this.showLoading = false;
    this.caseNumber = 2;
    // case number 1 :  mobile number not registered
    // case number 2 :  mobile number registered and coming first time to login
    // case number 3 :  already active user
  }

  ngOnInit() {

    this.form = this.fb.group ( {
      mobile: [null , Validators.compose ( [ Validators.required ] )]
    } );

  }

  onSubmit() {

    var req_object = [];
    req_object['mobile'] = this.mobile;
    req_object['caseNumber'] = this.caseNumber;
    this.verifymobileService.get(req_object, (results) => {
      console.dir(results);
      if(results.data.user_status == 0) {
         //Show error
         alert(results.message);
      } else if(results.data.user_status == 2) { // Pending
        localStorage.setItem("mobile",this.mobile.toString());
        this.router.navigate ( [ '/verifymobile' ] );
      }
      else if(results.data.user_status == 3) { // Active user login
        localStorage.setItem("mobile",this.mobile.toString());
        this.router.navigate ( [ '/verify' ] );
        //this.router.navigate ( [ '/verifymobile' ] );
      }
    });
  }

  onLogin() {
    this.showLoading = true;
    this.authService.loginUser(this.form.value).subscribe(
      data => this.handleData(data),
      error => this.handleError(error)
    )}

    handleData(data) {
      console.dir("data");
      console.dir(data);
    }
    
    handleError(error) {
      console.dir("error");
      console.dir(error);
    }

}
