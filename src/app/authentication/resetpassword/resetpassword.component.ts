import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  public form: FormGroup;
  public showLoading: boolean;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.showLoading = false;
  }

  ngOnInit() {
     this.form = this.fb.group ( {
       password: [null , Validators.compose ( [ Validators.required ] )] , confirmpassword: [null , Validators.compose ( [ Validators.required ] )]
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

}
