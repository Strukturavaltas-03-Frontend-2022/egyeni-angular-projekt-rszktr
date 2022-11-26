import { Component } from '@angular/core';
import { Game } from './model/class/game';
import { GameService } from './service/game.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'game-collection';

  gameList: Game[] = [];

  constructor(
    private gameService: GameService,
  ) {
    this.gameService.getAll().subscribe((games) => {
      this.gameList = [...games];
    })
  }
}
