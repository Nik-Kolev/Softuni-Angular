import { Post } from './../interfaces/post';
import { ApiService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css'],
})
export class RecentPostsComponent {
  posts: Post[] | null = null;
  errorFetchingData = false;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadPosts(5).subscribe({
      next: (value) => {
        this.posts = value;
        console.log(value);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      },
    });
  }
}
