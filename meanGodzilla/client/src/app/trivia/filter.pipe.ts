import { Pipe, PipeTransform } from '@angular/core';

import { Trivia } from './trivia';
import { User } from './../users/user';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(trivia_array: Array<Trivia>, search: string): Array<Trivia>{
        search = search.toLowerCase()

        return trivia_array.filter(trivia => {
          return trivia.name.toLowerCase().includes(search)
      })
  }
}
