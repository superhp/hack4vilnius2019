import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Hack4Vilnius2019';

  constructor(
    public authService: AuthService
  ) { }

  logout() {
    this.authService.SignOut();
  }
}
