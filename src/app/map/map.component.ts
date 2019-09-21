import {Component,OnInit} from '@angular/core';
import {GamesService} from "../services/games.service";
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../services/location.service';

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
  game: any;
  points: any;
    
  constructor(private activatedRoute: ActivatedRoute,
     private gameService: GamesService,
     private locationService: LocationService) {}

  options: any;
  overlays: any[];

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        const gameId = params['gameId'];
        console.log(gameId);
        this.gameService.getGame(gameId).subscribe(g => {
          this.game = g; 
          console.log(this.game);
          this.gameService.getGamePoints(gameId).subscribe(p=> {
            this.points = p;
            console.log(this.points);
          });
        });        
      })

      this.options = {
          center: {lat: 54.6872, lng: 25.2797},
          zoom: 14
      };

      this.locationService.currentLocation.subscribe(x => {
        console.log('Current coordinates: ' + x.latitude + ',' + x.longitude);
      })
  }
}