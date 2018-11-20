import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerifyService } from '../../service/verify/verify.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  //http://localhost:4200/authentication/verify/5VMVzSXjFAnZxSytVvOZGUtthpomiI
  public token: string;
  public is_success: boolean;
  constructor(private route: ActivatedRoute,private verifyService: VerifyService) {
    this.is_success = true;
    //this.route.params.subscribe( params => params.token ); 
    this.route.params.subscribe((params)  => {
      this.token = params.token;
    }); 
  }

  ngOnInit() {   
    var req_object = [];
    req_object['token'] = this.token;
    this.verifyService.get(req_object,(results) => {
      console.dir(results.success);
      this.setConfimationPageMessage(results.success);
    });
  }

  setConfimationPageMessage(val)
  {    
    this.is_success = val;
  }
}
