import {Component,OnInit} from '@angular/core';
import {GamesService} from "../services/games.service";
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../services/location.service';
import { DemoService } from '../services/demo.service';

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

  timePassed = 0;
  completed = 10; // in percents

  selectedPoint = {};
  showSelectedPoint = false;

  currentMarkerIndex = 10;

  constructor(private activatedRoute: ActivatedRoute,
     private gameService: GamesService,
     private locationService: LocationService,
     private demoService: DemoService) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        const gameId = params['gameId'];
        this.gameService.getGame(gameId).subscribe(g => {
          this.game = g;
          this.game.points.map(pp => {
            this.gameService.getPoint(pp.id).subscribe(pr => {
              if (pr) {
                this.points.push(pr);
                this.overlays.push(new google.maps.Marker({
                  position: {lat: pr.location.latitude, lng: pr.location.longitude}, 
                  title: pr.title,
                  zIndex: this.currentMarkerIndex,
                  icon: {
                    url: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
                    scaledSize: new google.maps.Size(52, 52)
                  }
                }));
              }
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
      })

      setInterval(() => this.timePassed++, 1000);

      this.demoService.getCathedralSquare().subscribe(data => {
        if (data.arrived) {
          let point = this.overlays.find(x => x.title === 'Cathedral Square');
          if(point){
            point.setAnimation(google.maps.Animation.BOUNCE);
            point.setZIndex(++this.currentMarkerIndex);
            point.setIcon({
              url: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
              scaledSize: new google.maps.Size(82, 82)
            });
          }
        }
      })

      this.demoService.getGediminasTower().subscribe(data => {
        if (data.arrived) {
          console.log('Arrived to Gediminas Tower');
        }
      })
  }

  handlePointClick(event) {
    let pointClicked = event.overlay.title;
    let pointDetails = this.points.find(x => x.title === pointClicked);
    this.selectedPoint = pointDetails;
    this.showSelectedPoint = true;
    console.log(pointDetails);
  }

  getTimeInString(){
    let m = Math.floor(this.timePassed / 60);
    let s = this.timePassed - m * 60;
    return m > 0 ? `${m} minutes ${s} seconds` : `${s} seconds`;
  }

  closeChallengePopup() {
    this.selectedPoint = {};
    this.showSelectedPoint = false;
  }

}
