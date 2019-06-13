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

  

  oneFile: any;
  itemId: any;

  //'Fdlh83uPnTJ65ImzOK5N';

  getOneFile(oneId: any){
    this.itemId = oneId;
    console.log(oneId);
    console.log(this.itemId)
    }
  
  sendOneFile(){
    return this.db.collection("files").doc(this.itemId).get();
  }


}