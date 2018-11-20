import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TokenService } from '../../service/auth/token.service';
import { JarwisService } from '../../service/jarwis/jarwis.service';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  public showLoading: boolean;
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private Token: TokenService,
    private Jarwis: JarwisService,
    private Auth: AuthService
    ) {
    this.showLoading = false;
  }

  ngOnInit() {
    this.form = this.fb.group ( {
      email: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );

    
  }

  onSubmit() {
    this.router.navigate ( [ '/' ] );
  }

  onLogin() {
    this.showLoading = true;
    this.Jarwis.loginUser(this.form.value).subscribe(
      data => this.handleData(data),
      error => this.handleError(error)
    );
  }

    handleData(data) {
      this.Token.handle(data.data.token);
      this.Auth.changeAuthStatus(true);
      this.router.navigateByUrl('/dashboard');
    }
    
    handleError(error) {
      console.dir("error");
      console.dir(error);
    }
}
