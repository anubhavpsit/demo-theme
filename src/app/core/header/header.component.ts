import { Component, EventEmitter, Output, Input } from '@angular/core';
import { TokenService } from '../../service/auth/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

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

  constructor(
    private router: Router,
    private Auth: AuthService,
    private Token: TokenService
    ) {}

  logOut(event: MouseEvent) {
    event.preventDefault();
    this.Auth.changeAuthStatus(false);
    this.Token.remove();
    this.router.navigateByUrl('/signin');
  }
}
