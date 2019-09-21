import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GamesService } from '../services/games.service';
import { IGame } from '../models/game';

@Component({
  selector: 'app-defined-games-accordion',
  templateUrl: './defined-games-accordion.component.html',
  styleUrls: ['./defined-games-accordion.component.less']
})
export class DefinedGamesAccordionComponent implements OnInit {

  @Output() gameSelected = new EventEmitter<string>();

  constructor(private gamesService: GamesService) { }

  games: Array<IGame> = [];

  ngOnInit() {
    this.gamesService.getAllDefinedGames().subscribe(data => {
      this.games = data;
    });
  }

  chooseGame(gameId: string) {
    this.gameSelected.emit(gameId);
  }

}
