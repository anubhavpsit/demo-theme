import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../../service/jarwis/jarwis.service';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;
  public email: string;
  public disableButton: boolean;
  public showview: string;
  
  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private http: HttpClient, 
    private Jarwis: JarwisService
  ) {
      this.disableButton = false;
      this.showview = "signup_page";
    }

  ngOnInit() {
    this.form = this.fb.group( {
      username: [null , Validators.compose ( [ Validators.required ] )],
      name: name,
      password: password,
      confirmPassword: confirmPassword,
      email: [null , Validators.compose ( [ Validators.required ] )],
    } );
  }

  onSubmit(isValid: boolean) {
    this.disableButton = true; // the button will then be disabled
    this.Jarwis.signup(this.form.value).subscribe(
      data => this.handleData(data),
      error => this.handleError(error)      
    );
  }

  handleData(data) {
    if (data.success) {
      this.showview = "confirmation_page";
      this.disableButton = false;
    }
  }

  handleError(error) {
    this.disableButton = false;
  }

}
