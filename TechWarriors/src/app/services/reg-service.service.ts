<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { registerInterface } from './userInterface';

@Injectable({
  providedIn: 'root'
})
=======
import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
>>>>>>> 8d0854a5743296f188b55f45d9f3d732e388eb50

@Injectable()
export class RegServiceService {

  constructor(
   public afAuth: AngularFireAuth
 ){}

 SendVerificationMail() {
  return this.afAuth.auth.currentUser.sendEmailVerification()
  }
 
  doRegister(value){
    
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
        this.SendVerificationMail(); 
      }, err => reject(err))
      
    }) 
  }

 

  


}

// import { Injectable } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// import { auth } from 'firebase';

// import {
//   AngularFirestore,
//   AngularFirestoreDocument
// } from '@angular/fire/firestore';
// import { AngularFireAuth } from 'angular/fire/auth';
// import * as firebase from 'firebase/app';

// @Injectable({
//   providedIn: 'root'
// })

// export class RegServiceService {

//   authState: FirebaseAuthState = null;
//   // registeredUsers: AngularFirestoreCollection<registerInterface>;

//   constructor( public afAuth: AngularFireAuth) {

//       af.auth.subscribe((auth) => {
//         this.authState = auth;
//       });
//     // this.registeredUsers = this.afs.collection('form');

//    }
  
  

  // this.locations = this.afs.collection('form').valueChanges();
  

//   form = new FormGroup({
//     $key: new FormControl(null),
//     firstName: new FormControl('', Validators.required),
//     lastName: new FormControl('', Validators.required),
//     email: new FormControl('', [Validators.email, Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+(@midlandu\.edu)$')]),
//     password: new FormControl('', [Validators.required, Validators.minLength(6)]),
//   });

//   getUsers(){
//     // this.registeredUsers = this.firebase.list('users');
//     return this.registeredUsers.snapshotChanges();
//   }

//   insertUser(user: registerInterface){
//     console.log(user);
//     this.registeredUsers.add(user);
//   }

// }


