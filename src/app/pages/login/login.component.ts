import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailValue: string = '';
  passValue: string = '';
  errorEmail: string = '';
  errorPass: string = '';

  login(): any {
    this.errorEmail = '';
    this.errorPass = '';
    if (this.emailValue == '') return this.errorEmail = 'Please enter a valid email address';
    if (this.passValue == '') return this.errorPass = 'Please enter a valid password';
    console.log("email: " + this.emailValue, "pass: " + this.passValue)
  }
}
