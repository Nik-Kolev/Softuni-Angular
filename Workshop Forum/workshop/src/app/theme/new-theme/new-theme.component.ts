import { Router } from '@angular/router';
import { ApiService } from './../../api.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {
  constructor(private apiService: ApiService, private route: Router) {}
  postTheme(title: string, post: string, e: Event): void {
    e.preventDefault();
    console.log(title, post);
    this.apiService.postTheme(title, post);
    this.route.navigate(['/home']);
  }

  cancelTheme(): void {
    this.route.navigate(['/home']);
  }

  newThemeSubmitHandler(form: NgForm): void{
    if (form.invalid){
      return
    }

    console.log(form.value)
  }
}
