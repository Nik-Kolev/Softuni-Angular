import { InjectionToken, NgModule, Provider, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@Injectable({
  providedIn: 'root',
})
export class MyClass {
  constructor() {
    console.log('Nameless call was constructed!');
  }
}
export const myCustomToken = new InjectionToken('Test');

// const myProvider: Provider = {
//   useClass: MyClass,
//   provide: myCustomToken,
// };

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule],
  providers: [],
  // providers: [MyClass, myProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
