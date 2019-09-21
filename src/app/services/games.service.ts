import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGame } from '../models/game';

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
    const doc = this.afs.collection('games').doc(gameId);
    return doc.valueChanges().pipe(
        map(res => ({
            ...res,
            ref: doc.ref.path
        }))
    );
  }

  public getPoint(pointId: string): Observable<any> {
    return this.afs.collection('points').doc(pointId).valueChanges();
  }

  public initGame(game: any, user: any): Observable<any> {
      return from(this.afs.collection('results').add({
          start: new Date(),
          end: null,
          game: game.ref,
          user: `/users/${user.uid}`,
          username: user.name,
          complete: []
      })).pipe(map(res => res.id));
  }
}
