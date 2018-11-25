import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { JarwisService } from '../../service/jarwis/jarwis.service';
import { CustomValidators } from 'ng2-validation';

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  public alert: any;
  public showUiMessage: boolean;
  public form: FormGroup;
  public disableButton: boolean;
  public showview: string;
  public token: string;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private Jarwis: JarwisService) { 
      this.disableButton = false;
      this.showview = "signup_page";
      this.route.params.subscribe((params)  => {
        this.token = params.token;
      }); 
    }

  ngOnInit() {
    this.form = this.fb.group( {
      password: password,
      confirmPassword: confirmPassword,
    } );
  }

  resetPassword(isValid: boolean) {
    this.disableButton = true;
    var data = { 
      password:this.form.value.password, 
      password_confirmation:this.form.value.confirmPassword,
      token: this.token
   }; 

    this.Jarwis.changePassword(data).subscribe(
      data => this.handleData(data),
      error => this.handleError(error)      
    );
  }  

  handleData(data) {
   this.showview = "confirmation_page";
   this.disableButton = false;
  }

  handleError(error) {
    this.disableButton = false;
    this.showUiMessage = true;
    this.alert = {
      id: 1,
      type: 'danger',
      message: error.error.message,
      dismissible:true 
    };
  }
}
