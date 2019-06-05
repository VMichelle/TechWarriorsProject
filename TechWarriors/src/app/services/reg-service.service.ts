import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { registerInterface } from './userInterface';

@Injectable({
  providedIn: 'root'
})

export class RegServiceService {

  registeredUsers: AngularFirestoreCollection<registerInterface>;

  constructor( private afs: AngularFirestore ) {

    this.registeredUsers = this.afs.collection('form');

   }
  
  

  // this.locations = this.afs.collection('form').valueChanges();
  

  form = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+(@midlandu\.edu)$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  getUsers(){
    // this.registeredUsers = this.firebase.list('users');
    return this.registeredUsers.snapshotChanges();
  }

  insertUser(user: registerInterface){
    console.log(user);
    this.registeredUsers.add(user);
  }

}
