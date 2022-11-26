import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

export interface ITableColumn {
  title: string;
  key: string;
}

export class FormField {
  label: string = '';
  key: string = '';
  type?: string = 'text';
  required?: Boolean = true;
  validators?: ValidatorFn[] = [];
  message?: string = ''
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  searchPhrase$: BehaviorSubject<string> = new BehaviorSubject('')

  gameTableColumns: ITableColumn[] = [
    { title: 'ID', key: 'id' },
    { title: 'Title', key: 'title' },
    { title: 'Platform', key: 'platform' },
    { title: 'Release Year', key: 'releaseYear' },
    { title: 'Status', key: 'status' },
    { title: 'Format', key: 'format' },
    { title: 'Gen', key: 'generation' },
    { title: 'Digital Location', key: 'digitalLocation' },
  ]

  constructor() { }
}
