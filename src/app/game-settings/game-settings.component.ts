import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.less']
})
export class GameSettingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onGameSelected(gameId: string) {
    this.router.navigate(['map'], { queryParams: {gameId: gameId}});
  }

}
