import { UserService } from './../../user/user.service';
import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/interfaces/theme';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  theme: Theme | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.fetchTheme();
  }

  fetchTheme(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.apiService
      .loadSingleTheme(id)
      .subscribe((theme) => (this.theme = theme));
  }

  get isLogged(): boolean {
    return !!this.userService.isLogged;
  }
}
