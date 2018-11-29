import { Component, EventEmitter, Output, Input } from '@angular/core';
import { TokenService } from '../../service/auth/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { JarwisService } from '../../service/jarwis/jarwis.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() heading: string;
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() openSearch = new EventEmitter<void>();
  @Output() toggleFullscreen = new EventEmitter<void>();

  public showLoading: boolean;

  constructor(
    private router: Router,
    private Auth: AuthService,
    private Token: TokenService,
    private Jarwis: JarwisService
    ) {}

  logOut(event: MouseEvent) {
    event.preventDefault();
    this.Jarwis.logout({"token" : this.Token.get()}).subscribe(
      data => this.handleData(data),
      error => this.handleError(error)
    );
  }

  test(event: MouseEvent) {
    event.preventDefault();
    this.Jarwis.test({"token" : this.Token.get()}).subscribe(
      data => console.dir(data),
      error => console.dir(error)
    );
  }

  rest(event: MouseEvent) {
    event.preventDefault();
    this.Jarwis.rest({"token" : this.Token.get()}).subscribe(
      data => console.dir(data),
      error => console.dir(error)
    );
  }


  handleData(data) {
    localStorage.removeItem('user_data');
    this.Token.remove();
    this.router.navigateByUrl('/signin');
  }
  
  handleError(error) {
    console.dir("error");
    console.dir(error);
  }
}
