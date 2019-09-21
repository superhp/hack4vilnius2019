import {Component,OnInit} from '@angular/core';
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
    
  constructor(private activatedRoute: ActivatedRoute) {}

  options: any;
  overlays: any[];

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        const gameId = params['gameId'];
        console.log(gameId);
      })

      this.options = {
          center: {lat: 36.890257, lng: 30.707417},
          zoom: 12
      };
  }
}