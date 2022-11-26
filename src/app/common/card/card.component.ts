import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/model/class/game';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  showCardButtons: boolean = false;

  @Input() oneGame: Game = new Game();

  @Output() deleteCardClick: EventEmitter<Game> = new EventEmitter

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
  }

  onDeleteCard(game: Game): void {
    console.log(game)
    this.gameService.remove(game).subscribe(
      () => console.log(`${game.title} has been deleted`)
    );
  }
}
