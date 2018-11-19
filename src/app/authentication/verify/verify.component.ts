import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  public token: string;
  public is_success: boolean;
  constructor(private route: ActivatedRoute) {
    this.is_success = true;
    //this.route.params.subscribe( params => params.token ); 
    this.route.params.subscribe((params)  => {
      this.token = params.token;
    }); 
  }

  ngOnInit() {
    console.dir(this.token);

    // hit verify token api service
  }

  setConfimationPageMessage(val)
  {
    this.is_success = val;
  }
}
