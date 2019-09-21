import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DemoService } from '../services/demo.service';
import { GamesService } from '../services/games.service';
import { LocationService } from '../services/location.service';

declare var google: any;

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
  resultId: string;

  timePassed = 0;
  completed = 10; // in percents

  selectedPoint = {};
  showSelectedPoint = false;

  constructor(private activatedRoute: ActivatedRoute,
              private gameService: GamesService,
              private locationService: LocationService,
              private demoService: DemoService,
              private authService: AuthService) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        const gameId = params.gameId;
        this.gameService.getGame(gameId).subscribe(g => {
          this.game = g;
          const userData = this.authService.userData;

          this.gameService.initGame(g, userData).subscribe(res => {
            console.log('Game initialized', res);
            this.resultId = res;
            this.game.points.map(pp => {
              this.gameService.getPoint(pp.id).subscribe(pr => {
                if (pr) {
                  this.points.push(pr);
                  this.overlays.push(new google.maps.Marker({position: {lat: pr.location.latitude, lng: pr.location.longitude}, title: pr.title}));
                }
              });
            });
          });
        });
      });

    this.options = {
          center: {lat: 54.6872, lng: 25.2797},
          zoom: 14,
          mapTypeId: 'terrain',
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false
      };

    this.locationService.currentLocation.subscribe(x => {
        console.log('Current coordinates: ' + x.latitude + ',' + x.longitude);
      });

    setInterval(() => this.timePassed++, 1000);

    this.demoService.getCathedralSquare().subscribe(data => {
        if (data.arrived) {
          console.log('Arrived to Cathedral Square');
        }
      });

    this.demoService.getGediminasTower().subscribe(data => {
        if (data.arrived) {
          console.log('Arrived to Gediminas Tower');
        }
      });
  }

  handlePointClick(event) {
    const pointClicked = event.overlay.title;
    const pointDetails = this.points.find(x => x.title === pointClicked);
    this.selectedPoint = pointDetails;
    this.showSelectedPoint = true;
    console.log(pointDetails);
  }

  getTimeInString() {
    const m = Math.floor(this.timePassed / 60);
    const s = this.timePassed - m * 60;
    return m > 0 ? `${m} minutes ${s} seconds` : `${s} seconds`;
  }

  closeChallengePopup() {
    this.selectedPoint = {};
    this.showSelectedPoint = false;
  }

}
