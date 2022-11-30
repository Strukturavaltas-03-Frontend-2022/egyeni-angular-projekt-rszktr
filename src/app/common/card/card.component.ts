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

  statusColor: string = 'lightgrey'
  platformColor: string = 'lightgrey'

  @Input() oneGame: Game | any = new Game();

  @Output() deleteCardClick: EventEmitter<Boolean> = new EventEmitter
  @Output() editCardClick: EventEmitter<Game> = new EventEmitter

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.statusTextColorizer()
    this.platformColorizer()
  }

  onDeleteCard(game: Game): void {
    this.gameService.remove(game).subscribe(
      () => {
        console.log(`${game.title} has been deleted`);
        this.deleteCardClick.emit(true)
      }
    );
  }

  statusTextColorizer(): void {
    switch (this.oneGame.status) {
      case 'Not Played': this.statusColor = '#f25f5c';
        break;
      case 'Played': {
        if (this.oneGame.hasCampaign == true) {
          this.statusColor = '#ffa200';
        } else if (this.oneGame.hasCampaign == false) {
          this.statusColor = 'grey';
        }
      }
        break;
      case 'Finished': this.statusColor = '#8ac926'
        break;
      case 'Completed': this.statusColor = '#1982c4'
        break;
      default: console.log('Game has no status state')
    }
  }

  platformColorizer(): void {
    switch (this.oneGame.platform) {
      case 'Wii': this.platformColor = '#82caec';
        break;
      case 'Wii U': this.platformColor = '#79bfe0';
        break;
      case 'PS4': this.platformColor = '#5285ec'
        break;
      case 'Switch': this.platformColor = '#e26666'
        break;
      default: console.log('Game has no platform state')
    }
  }

}
