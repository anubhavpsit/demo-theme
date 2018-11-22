import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public showLoading: boolean;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.showLoading = false;
  }

  ngOnInit() {
    this.form = this.fb.group ( {
      mobile: [null , Validators.compose ( [ Validators.required ] )]
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
