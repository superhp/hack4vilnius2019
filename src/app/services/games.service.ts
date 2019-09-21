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

  public getAllDefinedGames() {
    return this.afs.collection('games').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as IGame;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }
  
  public getGame(gameId: string): Observable<any> {
    return this.afs.collection('games').doc(gameId).valueChanges();
  }
}
