import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../model/class/game';

@Pipe({
  name: 'sortStatus'
})
export class SortStatusPipe implements PipeTransform {

  getNumber(item: any): any {
    switch ((item['status'].toString()).toLowerCase()) {
      case 'not played': return item['owned'] ? 2 : 1;
        break;
      case 'played': return item['hasCampaign'] ? 4 : 3;
        break;
      case 'finished': return 5;
        break;
      case 'completed': return 6;
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
