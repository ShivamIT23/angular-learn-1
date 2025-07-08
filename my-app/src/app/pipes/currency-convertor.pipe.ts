import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor'
})
export class CurrencyConvertorPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    if(args.length){
      let newValue = value * args[0];
      return newValue
    }
    return value*85;
  }
}
