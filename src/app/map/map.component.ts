import {Component,OnInit} from '@angular/core';

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
    
  options: any;

  overlays: any[];

  ngOnInit() {
      this.options = {
          center: {lat: 54.6872, lng: 25.2797},
          zoom: 14
      };
  }
}