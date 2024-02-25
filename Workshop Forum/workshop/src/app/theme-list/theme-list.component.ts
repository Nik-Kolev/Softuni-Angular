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

  constructor(private apiService: ApiService) {}

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
}
