import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private afs: AngularFirestore) { }

  public getResults(gameId: string): Observable<any[]> {
    var game = this.afs.collection("games").doc(gameId);

    return this.afs.collection('results', ref => ref.where("game", "==", game.ref)).snapshotChanges();
  }
}
