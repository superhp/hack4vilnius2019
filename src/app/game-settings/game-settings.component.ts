import { Component, OnInit } from '@angular/core';
import { GameType } from '../models/game-type';

interface GameTypeOption {
  value: GameType,
  viewValue: string
}

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.less']
})
export class GameSettingsComponent implements OnInit {

  constructor() { }

  gameTypeEnum: GameType;
  gameTypes: GameTypeOption[] = [];
  selectedGameType: GameTypeOption;

  ngOnInit() {
    this.gameTypes = [
      {value: GameType.Themed, viewValue: 'Themed'},
      {value: GameType.Random, viewValue: 'Random'},
    ]
  }

}
