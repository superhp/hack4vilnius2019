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

  public getResult(resultId: string): Observable<any> {
    return this.afs.collection("results").doc(resultId).snapshotChanges();
  }

  public calculateDurationInMinutes(start, end) {
    if (end === null)
      return -1;
      
    var diffMs = (end.seconds - start.seconds);

    return Math.round(((diffMs % 86400000) % 3600000) / 60);
  }
}
