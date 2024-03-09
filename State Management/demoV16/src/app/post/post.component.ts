import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { PostState, Post } from './post.type';
import { Store } from '@ngrx/store';
import * as PostAction from './post.actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  post$: Observable<Post>;
  textMsg: string = ''; // form input value;

  constructor(private store: Store<PostState>) {
    this.post$ = this.store.select('post');
  }

  editText() {
    this.store.dispatch(new PostAction.EditText(this.textMsg));
  }

  resetPost() {
    this.store.dispatch(new PostAction.Reset());
  }

  downvotePost() {
    this.store.dispatch(new PostAction.Downvote());
  }

  upvotePost() {
    this.store.dispatch(new PostAction.Upvote());
  }
}
