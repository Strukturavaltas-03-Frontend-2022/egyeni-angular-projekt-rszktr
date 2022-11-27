import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strToBoolean'
})
export class StrToBooleanPipe implements PipeTransform {

  transform(text: string): boolean {
    if (text.toLowerCase() == 'true') {
      return true
    } else return false;
  }

}
