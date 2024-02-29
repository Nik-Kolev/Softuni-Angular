import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService, private route: Router) {}
  login(email: string, password: string): void {
    console.log('ssss');
    //TODO no data, only mock up
    this.userService.login();
    this.route.navigate(['/home']);
  }
}
