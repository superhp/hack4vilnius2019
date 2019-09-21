import {Component,OnInit} from '@angular/core';
import {GamesService} from "../services/games.service";
import { ActivatedRoute } from '@angular/router';

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
  points = [];
  options: any;
  overlays = [];
    
  constructor(private activatedRoute: ActivatedRoute, private gameService: GamesService) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        const gameId = params['gameId'];
        console.log(gameId);
        this.gameService.getGame(gameId).subscribe(g => {
          this.game = g; 
          console.log(this.game);
          this.game.points.map(pp => {
            console.log(pp.id);
            this.gameService.getPoint(pp.id).subscribe(pr => {
              console.log(pr);
              this.points.push(pr);
              this.overlays.push(new google.maps.Marker({position: {lat: pr.location.latitude, lng: pr.location.longitude}, title: pr.title}));
              console.log({position: {lat: pr.location.latitude, lng: pr.location.longitude}, title: pr.title});
            });
          });
        });        
      });

      this.options = {
          center: {lat: 54.6872, lng: 25.2797},
          zoom: 14
      };
  }
}