import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  firebase = require('firebase');
  firebaseui = require('firebaseui');

  ui = new firebaseui.auth.AuthUI(firebase.auth());

  constructor() { }

  ngOnInit() {
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Other config options...
    });

    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

  }

  

  // checkLogin(){
  // firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  // });
  // }

}
