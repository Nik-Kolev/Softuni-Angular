import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  map,
} from 'rxjs';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Promise demo

// const p = new Promise((resolve) => {
//   resolve(100);
// });
// p.then(console.log);

// const o$ = new Observable<number>((obs) => {
//   obs.next(1000);
//   obs.next(2000);
//   obs.next(3000);

// obs.error(new Error('bad error'));

// obs.complete();

// return () => {
//clean up
//   };
// });

// o$.pipe(map((num) => num + 1)).subscribe({
//   next: console.log,
//   error: (err) => console.log(err),
//   complete: () => console.log('Observable completed'),
// });

// function interval(delay: number, count?: number) {
//   let counter = 0;
//   return new Observable((obs) => {
//     if (count === counter) {
//       obs.complete();
//       return;
//     }
//     const i = setInterval(() => {
//       obs.next(counter++);
//     }, delay);

//     return () => {
//       clearInterval(i);
//     };
//   });
// }

// const subs = interval(1000, 8).subscribe({
//   next: console.log,
//   error: (err) => console.log(err),
//   complete: () => console.log('Observable completed'),
// });

// setTimeout(() => {
//   subs.unsubscribe();
// }, 3000);

// Subjects

// const subj$$ = new Subject();
// subj$$.subscribe(console.log); // A
// subj$$.next(123); // A
// subj$$.subscribe(console.log); // B
// subj$$.subscribe(console.log); // C
// subj$$.next(400); // A, B, C

// setTimeout(() => {
//   subj$$.subscribe(console.log); // D
//   subj$$.next(555); // A, B, C, D

//   setTimeout(() => {
//     subj$$.subscribe(console.log); // E
//     subj$$.next(11); // A, B, C, D, E
//   }, 2000);
// }, 2000);

// Behavior subject

// const bSubj$$ = new BehaviorSubject(100);

// bSubj$$.subscribe(() => console.log('Sub started'));

// setTimeout(() => {
//   bSubj$$.subscribe(console.log);
//   bSubj$$.next(200);

//   setTimeout(() => {
//     bSubj$$.subscribe(console.log);
//     bSubj$$.next(300);
//   }, 2000);
// }, 2000);

//Replay subject

// const rSubj$$ = new ReplaySubject(10);
// rSubj$$.next(1000);
// rSubj$$.subscribe((d) => console.log('Subs1', d));

// for (let index = 1; index <= 30; index++) {
//   rSubj$$.next(index);
// }

// console.log('--------------------------');
// rSubj$$.subscribe((d) => console.log('Subs2', d));

// Async subject

const aSubj$$ = new AsyncSubject();
aSubj$$.next(1);
aSubj$$.next(2);
aSubj$$.next(3);
aSubj$$.subscribe((d) => console.log('Subs1', d));
aSubj$$.next(4);
aSubj$$.next(5);
aSubj$$.subscribe((d) => console.log('Subs2', d));
aSubj$$.complete();
