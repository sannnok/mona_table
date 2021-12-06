import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableHeader'
})
export class TableHeaderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const twowords = (value as string).split('-');
    if (!twowords[1]) return value;
    return `${twowords[0]} <sup>${twowords[1]}${this.suffix(twowords[1])}</sup>`;
  }

  private suffix(value: string) {
    let suffix = 'th',
    day = value;

    if (day === '1' || day === '21' || day === '31') {
        suffix = 'st'
    } else if (day === '2' || day === '22') {
        suffix = 'nd';
    } else if (day === '3' || day === '23') {
        suffix = 'rd';
    }

    return suffix;
  }
}
