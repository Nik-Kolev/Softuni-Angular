import { DEFAULT_EMAIL_DOMAINS } from './../../shared/constants';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  emailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(private userService: UserService, private route: Router) {}
  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.userService.login();
    this.route.navigate(['/home']);
  }
}
