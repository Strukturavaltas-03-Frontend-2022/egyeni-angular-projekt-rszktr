import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from 'src/app/model/class/game';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { GameService } from 'src/app/service/game.service';

declare var bootstrap: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {

  columns: ITableColumn[] = this.config.gameTableColumns;
  gameList$: Observable<Game[]> = this.gameService.getAll();

  paginationFormGroup: FormGroup = new FormGroup({})
  selectedDevice: number = 20;

  @Input() collectionSize: number = 0
  @Input() pageSize: number = 20;
  @Input() page: number = -1;

  constructor(
    private config: ConfigService,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameList$.subscribe(data => this.collectionSize = data.length)

    // Bootstrap tooltip initialization
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  }

  onPaginationSizeSelect(ev: Event): void {
    console.log(ev.target)
    this.gameService.getAll();

  }
}