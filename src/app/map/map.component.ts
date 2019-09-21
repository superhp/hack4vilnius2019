import {Component,OnInit} from '@angular/core';
import {GamesService} from "../services/games.service";

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    providers: [],
    styles: [`
        .ui-g-2 {
            padding-top: .75em;
        }
    `]
})
export class MapComponent implements OnInit {
  points: any;

  constructor(private gameService: GamesService){
      //gameService.getGames()
  }
    
  options: any;

  overlays: any[];

  ngOnInit() {
      this.options = {
          center: {lat: 54.6872, lng: 25.2797},
          zoom: 14
      };
  }
}