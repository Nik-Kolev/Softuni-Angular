import { MyClass, myCustomToken } from './app.module';
import { Component, Inject, Optional } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demoV16';
  counter = 0;
  users = [
    {
      name: 'Ivan',
    },
    {
      name: 'Pesho',
    },
  ];
  constructor(@Optional() @Inject(myCustomToken) test1: string) {
    // console.log(test);
    // test: MyClass
    // setInterval(() => {
    //   this.counter++;
    // }, 3000);
  }

  addUserHandler = (nameInput: HTMLInputElement): void => {
    const { value: name } = nameInput;
    // this.users.push({ name });
    this.users = this.users.concat({ name });
    nameInput.value = '';
  };
}
