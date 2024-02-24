// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Observable, map } from 'rxjs';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
// interface ClassProvider {
//   provide: any;
//   useClass: any;
// }

// interface ValueProvider {
//   provide: any;
//   useValue: any;
// }

// type Provider = ClassProvider | ValueProvider;

// const injector = {
//   collection: new Map(),
//   instances: new Map(),
//   provide(provider: Provider) {
//     this.collection.set(provider.provide, provider);
//   },
//   get(key: any, defaultValue?: any): any {
//     const provider = this.collection.get(key) as Provider;
//     if (!provider) {
//       if (defaultValue) {
//         return defaultValue;
//       }
//       throw new Error('Value not found in injector');
//     }
//     if ((provider as ValueProvider).useValue) {
//       return (provider as ValueProvider).useValue;
//     }
//     if ((provider as ClassProvider).useClass) {
//       let instance = this.instances.get(provider.provide);
//       if (this.instances.has(provider)) {
//         return instance;
//       }
//       instance = new (provider as ClassProvider).useClass(this);
//       this.instances.set(provider.provide, instance);
//       return instance;
//     }
//     // return result;
//   },
// };

// type Injector = typeof injector;

// const amount = Symbol('Amount');

// class Wallet {
//   private amount: number;
//   constructor(injector: Injector) {
//     this.amount = injector.get(amount, 0);
//   }
// }

// class Person {
//   wallet: Wallet;
//   constructor(injector: Injector) {
//     this.wallet = injector.get(Wallet);
//   }
// }

// class Employee {
//   wallet: Wallet;
//   constructor(injector: Injector) {
//     this.wallet = injector.get(Wallet);
//   }
// }

// injector.provide({ provide: Wallet, useClass: Wallet });
// injector.provide({ provide: amount, useValue: 2000 });

// const w = new Wallet(injector);
// const p = new Person(injector);
// const e = new Employee(injector);

function interval(intervalValue: number = 0) {
  return new Observable<number>((observer) => {
    let counter = 0;
    const timerId = setInterval(() => {
      observer.next(counter++);
    }, intervalValue);
    return () => {
      clearInterval(timerId);
    };
  });
}

const stream$ = interval(1000).pipe(map((x: number) => x + 3));

setTimeout(() => {
  const sub = stream$.subscribe(console.log);

  setTimeout(() => {
    sub.unsubscribe();
  }, 2000);
}, 3000);
