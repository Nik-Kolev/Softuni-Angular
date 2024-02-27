import { GlobalLoaderService } from './../global-loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.css'],
})
export class GlobalLoaderComponent {
  constructor(public globalLoaderService: GlobalLoaderService) {}
}
