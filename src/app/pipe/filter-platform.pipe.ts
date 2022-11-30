import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../model/class/game';

@Pipe({
  name: 'filterPlatform'
})
export class FilterPlatformPipe implements PipeTransform {

  transform(list: Game[], toShow: string[]): Game[] {

    if (!Array.isArray(list) || !Array.isArray(toShow)) {
      return list;
    }

    let arrayToReturn: Game[] = []
    let helperArray: Game[] = []

    toShow.forEach(selected => {
      helperArray = list.filter(item => item['platform'] == selected);
      arrayToReturn = [...arrayToReturn, ...helperArray]
    })

    return arrayToReturn

  }

}
