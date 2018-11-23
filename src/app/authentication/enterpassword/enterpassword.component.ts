import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enterpassword',
  templateUrl: './enterpassword.component.html',
  styleUrls: ['./enterpassword.component.scss']
})
export class EnterpasswordComponent implements OnInit {

  public form: FormGroup;
  public showLoading: boolean;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group ( {
      password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
    if(localStorage.getItem("mobile")==null)
    {
      this.router.navigate ( [ '/' ] );
      //console.log("Invalid mobile number");
    }
    else
    {
      this.router.navigate ( [ '/dashboard' ] );
    }
  }

  forgotPassword(){
    this.router.navigate ( [ '/verifymobile' ] );
  }
}
