import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLength',
})
export class TextLengthPipe implements PipeTransform {
  transform(value: string, limit: number): unknown {
    if (value.length > limit) {
      return value.substring(0, limit) + '...';
    }
    return value;
  }
}
