import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Game } from 'src/app/model/class/game';
import { ConfigService, FormField } from 'src/app/service/config.service';
import { GameService } from 'src/app/service/game.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {

  fields: FormField[] = this.config.gameEditorFormFields;
  gameFormGroup: FormGroup = new FormGroup({})
  game: Game | null = null;

  id: string = '';
  game$: Observable<Game> = this.ar.params.pipe(switchMap(params => this.gameService.get(params['id'])))

  constructor(
    private ar: ActivatedRoute,
    private gameService: GameService,
    private router: Router,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      this.id = params['id'];

      if (this.id === '0') {
        this.game = new Game();
        this.createControls(this.game)
      } else {
        this.game$.subscribe(game => {
          this.createControls(game)
          this.game = game;
        })
      }

    })
  }


  createControls(game: Game): void {
    this.fields.forEach(field => {
      const control = new FormControl(game[field.key], field.validators);
      this.gameFormGroup.addControl(field.key, control);
    })
  }

  onUpdate(): void {
    const game = this.gameFormGroup.value;
    game.firebaseId = this.game?.firebaseId;
    this.gameService.update(game).subscribe(
      game => this.router.navigate(['/', 'list']),
    )
  }
}
