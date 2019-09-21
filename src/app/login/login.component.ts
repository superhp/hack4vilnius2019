import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) {
    if (authService.isLoggedIn) {
      this.router.navigate(['/game-mode']);
    }
  }

  ngOnInit() {
  }

}
