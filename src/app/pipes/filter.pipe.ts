import { Pipe, PipeTransform } from '@angular/core';
import { rejects } from 'assert';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, userInput: string, propName: string): any {

    if (value.length === 0 || userInput === '') {
      return value;
    }

    const resultArray = [];

    for (const item of value) {

      if (item[propName] === userInput) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
