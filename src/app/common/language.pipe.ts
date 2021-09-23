import { Pipe, PipeTransform } from '@angular/core';
import { LanguageEnum } from '../app.domain';

@Pipe({name: 'language'})
export class LanguagePipe implements PipeTransform {
  transform(value: number): string {
    return LanguageEnum[value].valueOf();
  }
}
