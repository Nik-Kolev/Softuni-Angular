import { Test } from './../../test';
import { IUser } from './../../shared/interfaces';
import { GlobalLoaderService } from './../../core/global-loader.service';
import { UserService } from './../user.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class UserListComponent {
  userList: IUser[] | null = null;
  constructor(
    private userService: UserService,
    private globalLoaderService: GlobalLoaderService,
    private t: Test
  ) {
    (window as any).t2 = t;
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.globalLoaderService.showLoader('Loading users');
    this.userService.loadUsers().subscribe({
      next: (value) => {
        console.log(value);
        this.globalLoaderService.hideLoader();
        this.userList = value;
      },
    });
  }

  reloadUsersHandler(): void {
    this.loadUsers();
  }
}
