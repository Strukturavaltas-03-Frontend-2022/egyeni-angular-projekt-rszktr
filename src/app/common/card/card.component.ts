import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/model/class/game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() oneGame: Game = new Game();

  constructor() { }

  ngOnInit(): void {
  }

}
