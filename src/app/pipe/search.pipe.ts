import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../model/class/game';

@Pipe({
  name: 'search'
})
export class SearchPipe<T extends { [x: string]: any }> implements PipeTransform {

  transform(list: Game[], phrase: string = '', key: string = 'title'): Game[] {

    if (!phrase)
      return list

    phrase = phrase.toLowerCase()
    return list.filter(item => String(item[key]).toLowerCase().includes(phrase))
  }
}

