import { IUser } from './../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  loadUsers() {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  loadUser(id: number) {
    return this.http.get<IUser>(
      'https://jsonplaceholder.typicode.com/users/' + id
    );
  }
}
