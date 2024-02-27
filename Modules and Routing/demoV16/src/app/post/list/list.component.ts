import { Test } from './../../test';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private t: Test) {
    (window as any).t1 = t;
  }
}
