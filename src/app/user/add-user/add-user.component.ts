import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

import { ErrorModel } from './error.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserService]
})
export class AddUserComponent implements OnInit {

  email: String;
  firstname: String;
  lastname: String;
  userData: {};
  errorData: ErrorModel = new ErrorModel();
  errors: {};

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() { }

  addUser() {
    // Check if all fields filled in
    if (this.email !== undefined && this.firstname !== undefined && this.lastname !== undefined) {
      this.userData = {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname
      };

      // Submit data
      this.userservice.addUser(this.userData);

      // If everything fine - redirect to dashboard
      this.router.navigate(['']);

    } else {
      // Error Handling
      this.errors = this.userservice.validateUser();
      // console.log(this.errors);
      // Loop thru the keys
      for (var property in this.errors) {
        if (this.errors.hasOwnProperty(property)) {
          if (property === 'email') {
            this.errorData.email = 'Email ' + this.errors[property];
          } else if (property === 'first_name') {
            this.errorData.firstname = 'First name ' + this.errors[property];
          } else {
            this.errorData.lastname = 'Last name ' + this.errors[property];
          }
        }
      }

    }

  }

}
