import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { TokenService } from '../../service/auth/token.service';

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
    private authService: AuthService,
    private Token: TokenService
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
    this.authService.loginUser(this.form.value).subscribe(
      data => this.handleData(data),
      error => this.handleError(error)
    );
  }

    handleData(data) {
      console.dir("data");
      console.dir(data);
      this.Token.handle(data.token);
      this.router.navigateByUrl('/dashboard');
    }
    
    handleError(error) {
      console.dir("error");
      console.dir(error);
    }
}
