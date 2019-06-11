import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

//   getAvatars(){
//       return this.db.collection('/avatar').valueChanges()
//   }

  getUser(userKey){
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

//   updateUser(userKey, value){
//     value.nameToSearch = value.name.toLowerCase();
//     return this.db.collection('users').doc(userKey).set(value);
//   }


  getFiles(){
    return this.db.collection('files').snapshotChanges();
  }

//   searchUsers(searchValue){
//     return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
//       .where('nameToSearch', '<=', searchValue + '\uf8ff'))
//       .snapshotChanges()
//   }

//   searchUsersByAge(value){
//     return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
//   }


  createFile(value){
    return this.db.collection('files').add({
      UID: value.UID,
      title: value.title,
      description: value.description,
      downloadUrl: "",
    });
  }
}