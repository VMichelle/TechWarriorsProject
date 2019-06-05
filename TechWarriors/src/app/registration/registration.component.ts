import { Component, OnInit } from '@angular/core';
import { RegServiceService } from '../services/reg-service.service';

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

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.regService.form.valid) {
      if (this.regService.form.get('$key').value == null)
        this.regService.insertUser(this.regService.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
      // this.submitted = false;
    }
  }

}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.scss']
// })
// export class RegistrationComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
