import { Component, OnInit } from '@angular/core';
import { RegServiceService } from '../services/reg-service.service';
import { registerInterface } from '../services/userInterface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private regService: RegServiceService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.regService.form.controls;

  userResponse: registerInterface ={
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }


  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.regService.form.valid) {
      if (this.regService.form.get('$key').value == null)
        this.regService.insertUser(this.userResponse);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.userResponse.firstName= "";
      this.userResponse.lastName= "";
      this.userResponse.email= "";
      this.userResponse.password= "";
    }
  }

}


