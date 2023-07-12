import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMinutesSecond'
})
export class ToMinutesSecondPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
