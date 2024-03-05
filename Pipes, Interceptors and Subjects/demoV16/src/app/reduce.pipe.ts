import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  // pure: false - not pure functions will re-render, if it is true it will memoized - default is pure
})
export class ReducePipe<T> implements PipeTransform {
  transform(
    array: T[],
    reduceFn: (acc: any, curr: T) => any,
    initialValue: T
  ): unknown {
    return array.reduce(reduceFn, initialValue);
  }
}
