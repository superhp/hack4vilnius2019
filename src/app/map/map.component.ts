
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { DemoService } from '../services/demo.service';
import { GamesService } from '../services/games.service';
import { LocationService } from '../services/location.service';
import { ResultsService } from '../services/results.service';

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
  completed = 1; // in percents

  selectedPoint = {};
  showSelectedPoint = false;

  currentMarkerIndex = 10;

  constructor(private activatedRoute: ActivatedRoute,
              private gameService: GamesService,
              private locationService: LocationService,
              private demoService: DemoService,
              private authService: AuthService,
              private resultsService: ResultsService,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        const gameId = params.gameId;
        this.gameService.getGame(gameId).subscribe(g => {
          this.game = g;

          const userData = this.authService.userData;

          this.gameService.initGame(g, userData).subscribe(res => {
            console.log('Game initialized', res);
            this.resultId = res;

            this.resultsService.getResultValue(this.resultId).subscribe(results => {
                let completedPoints = results.complete || [];
                if(this.game.points.length === completedPoints.length && results.end === null){
                    this.onGameFinished();
                }
                this.completed = completedPoints.length / this.game.points.length * 100;

                for(let cp in completedPoints){
                    let title = this.points.find(x => x.id === completedPoints[cp]).title;
                    let point = this.overlays.find(x => x.title === title);
                    if(point){
                      point.setAnimation(null);
                      point.setZIndex(0);
                      point.setIcon({
                        url: "../../assets/pin-green.png",
                        scaledSize: new google.maps.Size(52, 52)
                      });
                    }
                }                
            });

            this.game.points.map(pp => {
              this.gameService.getPoint(pp.id).subscribe(pr => {
                if (pr) {
                  this.points.push({id: pp.id, ...pr});
                  this.overlays.push(new google.maps.Marker({
                    position: {lat: pr.location.latitude, lng: pr.location.longitude},
                    title: pr.title,
                    zIndex: this.currentMarkerIndex,
                    icon: {
                      url: "../../assets/pin-red.png",
                      scaledSize: new google.maps.Size(52, 52)
                    }
                  }));
                }
              });
            });
          });
        });        
      });

    this.options = {
          center: {lat: 54.6863, lng: 25.2887},
          zoom: 16,
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
          let point = this.overlays.find(x => x.title === 'Cathedral Square');
          if(point){
            point.setAnimation(google.maps.Animation.BOUNCE);
            point.setZIndex(++this.currentMarkerIndex);
            point.setIcon({
              url: "../../assets/pin-blue.png",
              scaledSize: new google.maps.Size(82, 82)
            });
          }
        }
      });

    this.demoService.getGediminasTower().subscribe(data => {
        if (data.arrived) {
          console.log('Arrived to Gediminas Tower');
        }
        if (data.arrived) {
          let point = this.overlays.find(x => x.title === 'Gediminas Tower');
          if(point){
            point.setAnimation(google.maps.Animation.BOUNCE);
            point.setZIndex(++this.currentMarkerIndex);
            point.setIcon({
              url: "../../assets/pin-blue.png",
              scaledSize: new google.maps.Size(82, 82)
            });
          }
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

  onGameFinished() {
    this.gameService.finishGame(this.resultId);

    this.router.navigate(['/finish'], { queryParams: {
      resultId: this.resultId
    }});
  }

}
