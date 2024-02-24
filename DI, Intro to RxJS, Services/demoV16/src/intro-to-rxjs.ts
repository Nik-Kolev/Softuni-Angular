import { Observable } from 'rxjs';

function getValue() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('10');
    }, 2000);
  });
}

const o = new Observable((observer) => {
  observer.next(100);
  observer.next(200);
  observer.next(300);
  observer.complete();
});

o.subscribe(console.log);
