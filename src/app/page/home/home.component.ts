import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/model/class/game';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gameList$: Observable<Game[]> = this.gameService.getAll();


  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
  }

}
