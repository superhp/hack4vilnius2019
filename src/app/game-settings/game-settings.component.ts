import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameType } from '../models/game-type';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.less']
})
export class GameSettingsComponent implements OnInit {

  selectedGameType = GameType.Themed; 

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onGameSelected(gameId: string) {
    this.router.navigate(['instructions'], { queryParams: {
      gameId: gameId,
      gameType: this.selectedGameType
    }});
  }

  tabIndexChanged(index: number) {
    this.selectedGameType = <GameType>index;
  }

}
