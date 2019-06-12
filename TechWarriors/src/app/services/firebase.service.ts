import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}


  getFile(userKey){
    return this.db.collection('files').doc(userKey).snapshotChanges();
  }


  getFiles(){
    return this.db.collection('files').snapshotChanges();
  }


}