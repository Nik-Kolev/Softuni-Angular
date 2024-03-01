import { UserService } from './../user/user.service';
import { Theme } from './../interfaces/theme';
import { ApiService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css'],
})
export class ThemeListComponent {
  themeList: Theme[] | null = null;
  errorFetchingData = false;

  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.apiService.loadThemes().subscribe({
      next: (value) => {
        this.themeList = value;
        console.log(value);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      },
    });
  }

  get isLogged(): boolean {
    return !!this.userService.isLogged;
  }
}
