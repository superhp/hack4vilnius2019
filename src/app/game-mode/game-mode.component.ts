import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-game-mode',
  templateUrl: './game-mode.component.html',
  styleUrls: ['./game-mode.component.less']
})
export class GameModeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
