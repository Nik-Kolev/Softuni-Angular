import { Test } from './../../test';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class PostListComponent {
  constructor(private t: Test) {
    (window as any).t1 = t;
  }
}
