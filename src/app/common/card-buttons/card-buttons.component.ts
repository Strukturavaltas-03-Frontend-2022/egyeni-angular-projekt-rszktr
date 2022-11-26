import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-card-buttons',
  templateUrl: './card-buttons.component.html',
  styleUrls: ['./card-buttons.component.scss']
})
export class CardButtonsComponent implements OnInit {

  @Output() clicked: EventEmitter<boolean> = new EventEmitter()

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onDeleteButtonClick(): void {
    this.clicked.emit(true);
  }

}
