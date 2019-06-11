import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthGenericService } from '../services/auth-generic.service';
import * as admin from 'firebase-admin';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';
  uid: string = ''

  constructor(
    public authService: AuthGenericService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryLogin(value: any){
    this.authService.doLogin(value)
    .then(res => {
      this.uid = res.user.uid;
      // this.getToken();
      this.router.navigate(['/user']);
      console.log(res);
      console.log(value);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

  getToken(){
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      // Send token to your backend via HTTPS
      
      console.log('get token function');
      // ...
      
    }).catch(function(error) {
      // Handle error
    });
  }

  // tryGoogleLogin(){
  //   this.authService.doGoogleLogin()
  //   .then(res => {
  //     this.router.navigate(['/user']);
  //   })
  // }






}
