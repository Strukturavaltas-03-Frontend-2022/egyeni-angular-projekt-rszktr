import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../model/class/game';

@Pipe({
  name: 'sortTitle'
})
export class SortTitlePipe<T extends { [x: string]: any }> implements PipeTransform {

  ignoreWords(item: any, property: any): any {
    return item[property].replace(/^The |^A |^An /, "")
  }

  transform(list: Game[], request: boolean, ascend: boolean): unknown {

    if (!Array.isArray(list) || !request) {
      return list;
    }

    if (ascend) {
      return list.sort((a, b) => this.ignoreWords(a, 'title').localeCompare(this.ignoreWords(b, 'title')));
    } else {
      return list.sort((a, b) => this.ignoreWords(b, 'title').localeCompare(this.ignoreWords(a, 'title')));
    }
  }

}

