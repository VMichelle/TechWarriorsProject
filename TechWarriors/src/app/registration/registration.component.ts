import { Component, OnInit } from '@angular/core';
import { RegServiceService } from '../services/reg-service.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';



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
    this.afs.collection('users').add({'admin': this.admin = false, 'first name': this.registerForm.value.firstName, 'last name': this.registerForm.value.lastName, 'email': this.email});
  }

   ngOnInit() {
     this.registerForm = this.fb.group({
       firstName: [''],
       lastName: [''],
       email: ['', [Validators.pattern('^[a-zA-Z0-9._%+-]+(@midlandu\.edu)$')]],
       password: ['', [Validators.required, Validators.minLength]],
     });
   }



   tryRegister(value){
     this.addUser();
     this.authService.doRegister(value)
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



// import { Component, OnInit } from '@angular/core';
// import { RegServiceService } from '../services/reg-service.service';
// import { registerInterface } from '../services/userInterface';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { authInterface } from '../services/auth-interface'

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.scss']
// })
// export class RegistrationComponent implements OnInit {

//   constructor(private regService: RegServiceService) { }
//   submitted: boolean;
//   showSuccessMessage: boolean;
//   formControls = this.regService.form.controls;
//   errorMessage: String = "";
//   successMessage: String = "";

//   userResponse: registerInterface ={
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: ""
//   }

  


//   ngOnInit() {
//   }

//   onSubmit() {
//     this.submitted = true;
//     if (this.regService.form.valid) {
//       if (this.regService.form.get('$key').value == null)
//         this.regService.insertUser(this.userResponse);
//         this.showSuccessMessage = true;
//         setTimeout(() => this.showSuccessMessage = false, 3000);
//       this.submitted = false;
//       this.userResponse.firstName= "";
//       this.userResponse.lastName= "";
//       this.userResponse.email= "";
//       this.userResponse.password= "";

      
//         this.regService.doRegister(authInterface)
//         .then(res => {
//           console.log(res);
//           this.errorMessage = "An error occurred!  Please try again!";
//           this.successMessage = "Your account has been created";
//         }, err => {
//           console.log(err);
//           this.errorMessage = err.message;
//           this.successMessage = "";
//         })
      
//     }

    

//   }

// }








  //  onSubmit(){
  //   this.submitted = true;
  //   if (this.tryRegister.arguments.valid) {
  //     if (this.authService.doRegister.arguments
  //       this.regService.insertUser(this.userResponse);
  //       this.showSuccessMessage = true;
  //       setTimeout(() => this.showSuccessMessage = false, 3000);
  //  }