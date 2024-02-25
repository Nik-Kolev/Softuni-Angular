import { Post } from './interfaces/post';
import { Theme } from './interfaces/theme';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment';
const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  loadThemes() {
    return this.httpClient.get<Theme[]>(`${apiURL}/themes`);
  }

  loadPosts(limit?: number) {
    return this.httpClient.get<Post[]>(
      `${apiURL}/posts${limit ? `?limit=${limit}` : ''}`
    );
  }
}