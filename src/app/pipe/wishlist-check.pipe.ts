import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../model/class/game';

@Pipe({
  name: 'wishlistCheck'
})
export class WishlistCheckPipe implements PipeTransform {

  transform(text: string, game: Game): string {
    if (text == 'Not Played' && game['owned'] == true) {
      return 'Not Played'
    } else if (text == 'Not Played' && game['owned'] == false) {
      return 'Wishlist'
    } else return text
  }

}
