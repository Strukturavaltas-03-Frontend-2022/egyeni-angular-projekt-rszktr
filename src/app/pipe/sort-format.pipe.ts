import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../model/class/game';

@Pipe({
  name: 'sortFormat'
})
export class SortFormatPipe implements PipeTransform {

  getNumber(item: any): any {
    switch ((item['format'].toString()).toLowerCase()) {
      case 'physical': return 1;
        break;
      case 'steam': return 2;
        break;
      case 'eshop': return 3;
        break;
      case 'ps store': return 4;
        break;
      case '': return 100;
        break;
      default: console.log((item['format'].toString()).toLowerCase());
    }
  }

  transform(list: Game[], request: boolean, ascend: boolean): Game[] {

    if (!Array.isArray(list) || !request) {
      return list;
    }

    if (ascend) {
      return list.sort((a, b) => this.getNumber(a) - this.getNumber(b))
    } else {
      return list.sort((a, b) => this.getNumber(b) - this.getNumber(a))
    }
  }
}
