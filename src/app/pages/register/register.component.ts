import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailValue: string = '';
  passValue: string = '';
  cfPassValue: string = '';
  errorEmail: string = '';
  errorPass: string = '';
  errorCfPass: string = '';

  register(): any {
    this.errorEmail = '';
    this.errorCfPass = '';
    this.errorPass = '';
    if (this.emailValue == '') return this.errorEmail = 'Please enter a valid email address';
    if (this.passValue == '') return this.errorPass = 'Please enter a valid password';
    if (this.cfPassValue !== this.passValue) return this.errorCfPass = 'Password not matched';
    console.log("email: " + this.emailValue, "pass: " + this.passValue, "cf Pass: " + this.cfPassValue);
  }
}
