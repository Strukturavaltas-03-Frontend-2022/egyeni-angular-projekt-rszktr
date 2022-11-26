import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgPath'
})
export class ImgPathPipe implements PipeTransform {

  transform(value: string): string {
    return `../../assets/images/${value}`;
  }

}
