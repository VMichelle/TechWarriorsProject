import { Component, OnInit } from '@angular/core';
import { RegServiceService } from '../services/reg-service.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: boolean;
  submitted: boolean;
  admin: boolean;
  email: string;
  firstName: string = '';
  lastName: string = '';

  constructor(
    public authService: RegServiceService,
    private router: Router,
    private fb: FormBuilder,
    public afs: AngularFirestore
  ) { }

  addUser(){
    this.afs.collection('users').add({'first name': this.registerForm.value.firstName, 'last name': this.registerForm.value.lastName, 'email': this.email});
  }

   ngOnInit() {
     this.registerForm = this.fb.group({
       firstName: [''],
       lastName: [''],
       email: ['', [Validators.pattern('^[a-zA-Z0-9._%+-]+(@midlandu\.edu)$')]],
       password: ['', [Validators.required, Validators.minLength]],
     });
   }



   tryRegister(){
     this.addUser();
     this.authService.doRegister(this.registerForm.value)
     .then(res => {
       console.log(res);
       this.errorMessage = "";
       this.successMessage = true;
       setTimeout(() => this.successMessage = false, 3000);
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
     })
    }

}
