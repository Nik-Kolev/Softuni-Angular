import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject$$ = new BehaviorSubject<Object | null>(null);
  private isLoading$$ = new BehaviorSubject<boolean>(false);

  public userObs$ = this.userSubject$$.asObservable();
  public isLoading$ = this.isLoading$$.asObservable();

  constructor(private http: HttpClient) {}

  loadUsers(): void {
    this.userSubject$$.next(null);
    this.isLoading$$.next(true);

    this.http.get('/api/users').subscribe({
      next: (users) => {
        this.isLoading$$.next(false), this.userSubject$$.next(users);
      },
    });
  }
}
