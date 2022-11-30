import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../model/class/game';

@Pipe({
  name: 'sortYear'
})
export class SortYearPipe<T extends { [x: string]: any }> implements PipeTransform {

  transform(list: Game[], request: boolean, ascend: boolean): Game[] {

    if (!Array.isArray(list) || !request) {
      return list;
    }

    if (ascend) {
      return list.sort((a, b) => {
        return Number(a['releaseYear']) - Number(b['releaseYear'])
      })
    }
    else {
      return list.sort((a, b) => Number(b['releaseYear']) - Number(a['releaseYear']))
    }
  }
}