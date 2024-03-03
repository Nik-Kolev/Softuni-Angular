import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //another way to get the form data without passing it as a parameter of the callback
  @ViewChild('loginForm') loginForm: NgForm | undefined;

  ngOnInit(): void {
    // will be rendered only the static content
    this.loginForm?.valueChanges?.subscribe(console.log);
  }

  // ngAfterViewInit(): void {
  // will render the final content with the dynamic components
  // }

  submitHandler(): void {
    // form.reset(); // reset form
    if (!this.loginForm) return;

    const form = this.loginForm;
    if (form.invalid) {
      return;
    }

    // form.setValue({
    //   email: '',
    //   password: '',
    // }); // can clear specific fields

    const value: { email: string; password: string } = form.value;

    console.log(value.email);
    console.log(value.password);
  }
}
