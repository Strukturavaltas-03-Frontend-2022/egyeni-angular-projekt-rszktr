import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from 'src/app/model/class/game';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  columns: ITableColumn[] = this.config.gameTableColumns;
  gameList$: Observable<Game[]> = this.gameService.getAll();

  constructor(
    private config: ConfigService,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
  }
}