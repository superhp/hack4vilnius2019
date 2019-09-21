import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICoordinates } from '../models/coordinates';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  };

  public currentLocation: Subject<ICoordinates> = new Subject();

  constructor() {
    navigator.geolocation.watchPosition(this.successCallback, this.errorCallback, this.options);
  }

  successCallback = (pos) => {
    this.currentLocation.next({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude
    })
  }

  errorCallback = (err) => {
    console.log(err);
  }

}
