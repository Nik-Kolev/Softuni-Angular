import { Component } from '@angular/core';
import { ErrorService } from './error.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  apiErrorMessage$ = this.errorService.apiError$$
    .asObservable()
    .pipe(map((error: any) => (error ? error.message : '')));
  constructor(private errorService: ErrorService) {}
}
