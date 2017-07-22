import { Pipe, PipeTransform } from '@angular/core';

import { Trivia } from './trivia';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(trivia_array: Array<Trivia>, field: any): any {
      return trivia_array.sort((a,b) => {
        if (a[field]  < b[field]) {
          return -1
        } else if (a[field] > b[field]) {
          return 1
        } else {
          return 0
        }
      });
}
}
