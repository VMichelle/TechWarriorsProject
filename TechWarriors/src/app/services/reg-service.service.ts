import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class RegServiceService {

  constructor(private firebase: AngularFireDatabase) { }
  registeredUsers: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  getUsers(){
    this.registeredUsers = this.firebase.list('users');
    return this.registeredUsers.snapshotChanges();
  }

  insertUser(user){
    this.registeredUsers.push({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });
  }

}
