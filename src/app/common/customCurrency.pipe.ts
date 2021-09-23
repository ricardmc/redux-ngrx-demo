import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyEnum} from '../app.domain';

@Pipe({name: 'customCurrency'})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    console.log(value);
    console.log(CurrencyEnum);
    return CurrencyEnum[value].valueOf();
  }
}
