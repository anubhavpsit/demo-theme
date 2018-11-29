import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TokenService } from '../../service/auth/token.service';
import { JarwisService } from '../../service/jarwis/jarwis.service';
import { AuthService } from '../../service/auth/auth.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public alert: any;
  public showUiMessage: boolean;
  public form: FormGroup;
  public showLoading: boolean;
  constructor(
    alertConfig: NgbAlertConfig,
    private fb: FormBuilder, 
    private router: Router,
    private Token: TokenService,
    private Jarwis: JarwisService,
    private Auth: AuthService
    ) {
    this.showLoading = false;
    this.showUiMessage = false;
    if (this.Token.loggedIn()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  ngOnInit() {
    this.form = this.fb.group ( {
      email: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );    
  }

  // onSubmit() {
  //   this.router.navigate ( [ '/' ] );
  // }

  onLogin() {
    this.showLoading = true;
    this.showUiMessage = false;
    this.Jarwis.loginUser(this.form.value).subscribe(
      data => this.handleData(data),
      error => this.handleError(error)
    );
  }

    handleData(data) {
      this.Token.handle(data.data.token);
      localStorage.setItem('user_data', JSON.stringify(data.data.user_data));
      //this.Auth.changeAuthStatus(true);
      //this.Auth.setLoggedIn(true);
      this.router.navigateByUrl('/dashboard');
    }
    
    handleError(error) {
      this.showLoading = false;
      this.showUiMessage = true;
      this.alert = {
        id: 1,
        type: 'danger',
        message: error.error.error,
        dismissible:true 
      };
    }
}
