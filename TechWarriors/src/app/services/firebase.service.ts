import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  getFile(userKey) {
    return this.db.collection('files').doc(userKey).snapshotChanges();
  }

  getFiles() {
    return this.db.collection('files').snapshotChanges();
  }

  itemId: any;

  getOneFile(oneId: any) {
    this.itemId = oneId;
  }

  sendOneFile() {
    return this.db.collection("files").doc(this.itemId).get();
  }

  getUserComments() {
    return this.db.collection("files").doc(this.itemId).collection('comments').get();
  }

  // storeUserComment() {
  //     return this.db.collection('comments').add({
  //       docRef: 'docRefExample',
  //       userComment: 'I love to comment. this is my comment about this file over here',
  //       userName: 'Bob Michael'
  //     });
  //   }


  }

