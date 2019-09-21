import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private afs: AngularFirestore) { }

  getCathedralSquare(): Observable<any> {
    return this.afs.collection('demo').doc('cathedral-square').valueChanges();
  }

  getGediminasTower(): Observable<any> {
    return this.afs.collection('demo').doc('gediminas-tower').valueChanges();
  }
}
