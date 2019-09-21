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

  public getResultValue(resultId: string): Observable<any> {
    return this.afs.collection("results").doc(resultId).valueChanges();
  }

  public transformResults(results: any[]) {
    let leaderboard = results.map(r => ({ id: r.payload.doc.id, name: r.payload.doc.data().username, duration: this.calculateDurationInMinutes(r.payload.doc.data().start, r.payload.doc.data().end) }));
    leaderboard = leaderboard.filter(l => l.duration >= 0).sort((l1, l2) => l1.duration - l2.duration);

    return leaderboard;
  }

  public calculateDurationInMinutes(start, end) {
    if (end === null)
      return -1;
      
    var diffMs = (end.seconds - start.seconds);

    return Math.round(((diffMs % 86400000) % 3600000) / 60);
  }
}
