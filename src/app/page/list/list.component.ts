import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
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
  gameList$: Game[] = [];


  // Pagnination
  paginationFormGroup: FormGroup = new FormGroup({})

  @Input() collectionSize: number = 0
  @Input() pageSize: number = 20;
  @Input() page: number = -1;




  // Sort variables
  sortTitleRequest: boolean = true;
  sortTitleAscend: boolean = true;

  sortYearRequest: boolean = false;
  sortYearAscend: boolean = true;

  sortPlatformRequest: boolean = false;
  sortPlatformAscend: boolean = false;

  sortFormatRequest: boolean = false;
  sortFormatAscend: boolean = false;

  sortStatusRequest: boolean = false;
  sortStatusAscend: boolean = false;

  // Filter variables
  filterFormGroup: FormGroup = new FormGroup({})

  filterRequest: string[] = ['Wii', 'Wii U', 'PS4', 'Switch']
  searchPhrase: string = ''
  searchProperty: string = 'title'


  constructor(
    private config: ConfigService,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameService.gameList$.subscribe(data => {
      this.gameList$ = data;
      this.collectionSize = data.length
    })

  }

  onFilterRequest(request: string, showItem: boolean): void {

    if (showItem) {
      if (!this.filterRequest.includes(request)) {
        this.filterRequest = [...this.filterRequest, request]
        this.gameList$
      }
    } else {
      if (this.filterRequest.includes(request)) {
        let index = this.filterRequest.findIndex(item => item == request)
        index == -1 ? null : this.filterRequest.splice(index, 1)
      }
    }
  }

  onFilterPlatform(event: Event): void {
    const clickedElement = event.target as HTMLInputElement
    const inputText = clickedElement.nextElementSibling?.textContent;
    const inputActive = clickedElement.checked

    if (typeof inputText == 'string') {
      this.onFilterRequest(inputText, inputActive)
    }
    this.ngOnInit()
  }

  countPaginationSize(): void {

  }

  onDeleteHappened(): void {
    this.ngOnInit()
  }


  changeSortOrder(classFromFunction: string, textFromButton: string): void {

    if (textFromButton == 'Title') {
      if (!classFromFunction.includes('up')) {
        this.sortTitleAscend = true
      } else {
        this.sortTitleAscend = false
      }
    } else if (textFromButton == 'Year') {
      this.sortYearRequest = true
      if (!classFromFunction.includes('up')) {
        this.sortYearAscend = true
      } else {
        this.sortYearAscend = false
      }
    } else if (textFromButton == 'Status') {
      this.sortStatusRequest = true
      if (!classFromFunction.includes('up')) {
        this.sortStatusAscend = true
      } else {
        this.sortStatusAscend = false
      }
    }
  }

  onSortClick(event: Event) {
    let targetElement = (event.target as HTMLElement)
    let classFromButton = '';
    let textFromButton: string | any = '';

    if (targetElement.tagName == 'BUTTON') {
      classFromButton = targetElement.children[0].className
      textFromButton = targetElement.textContent
      this.changeSortOrder(classFromButton, textFromButton)
    } else if (targetElement.tagName == 'I') {
      let classFromButton = ((event.target as HTMLElement).className)
      textFromButton = targetElement.parentElement?.textContent
      this.changeSortOrder(classFromButton, textFromButton)
    }
  }
}