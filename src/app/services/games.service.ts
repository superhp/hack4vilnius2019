import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IGame } from '../models/game';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private afs: AngularFirestore) { }

  public getGame(gameId: string): Observable<any> {
    return this.afs.collection('games').doc(gameId).valueChanges();
  }
}
