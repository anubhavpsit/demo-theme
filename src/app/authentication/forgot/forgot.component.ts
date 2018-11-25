import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { JarwisService } from '../../service/jarwis/jarwis.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public alert: any;
  public showUiMessage: boolean;
  public form: FormGroup;
  public showLoading: boolean;

  constructor(private fb: FormBuilder, private router: Router, private Jarwis: JarwisService) {
    this.showLoading = false;
    this.showUiMessage = false;
  }

  ngOnInit() {
    this.form = this.fb.group ( {
      email: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
    //this.router.navigate ( [ '/' ] );
    this.showLoading = true;
    this.showUiMessage = false;
    this.Jarwis.sendPasswordResetLink(this.form.value).subscribe(
      data => this.handleData(data),
      error => this.handleError(error)
    );
  }

  handleData(data) {
    this.showLoading = false;
    this.showUiMessage = true;
    this.alert = {
      id: 1,
      type: 'success',
      message: data.message,
      dismissible:true 
    };
  }
  
  handleError(error) {
    this.showLoading = false;
    this.showUiMessage = true;
    this.alert = {
      id: 1,
      type: 'danger',
      message: error.error.message,
      dismissible:true 
    };
  }
}
