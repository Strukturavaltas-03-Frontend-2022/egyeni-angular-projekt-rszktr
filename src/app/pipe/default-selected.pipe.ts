import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultSelected'
})
export class DefaultSelectedPipe implements PipeTransform {

  transform(currentOption: string, gameProperty: string): boolean {
    if (!gameProperty) {
      return false
    }
    return currentOption.toLowerCase() == gameProperty.toLowerCase() ? true : false;
  }

}
