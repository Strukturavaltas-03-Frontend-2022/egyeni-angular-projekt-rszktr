import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultSelected'
})
export class DefaultSelectedPipe implements PipeTransform {

  transform(currentOption: string, gameProperty: string): boolean {

    return currentOption.toString() == gameProperty.toString() ? true : false;
  }

}
