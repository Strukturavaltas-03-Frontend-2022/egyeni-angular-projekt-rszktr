import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from '../model/class/game';

export interface ITableColumn {
  title: string;
  key: string;
}

export class FormField {
  label: string = '';
  key: string = '';
  type?: string = 'text';
  options?: string[] = ['']
  required?: Boolean = true;
  validators?: ValidatorFn[] = [];
  message?: string = '';
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
    { title: 'Format', key: 'format' },
    { title: 'Release Year', key: 'releaseYear' },
    { title: 'Owned', key: 'Owned' },
    { title: 'Status', key: 'status' },
  ]

  gameEditorFormFields: FormField[] = [
    {
      label: 'Title',
      key: 'title',
      validators: [
        Validators.pattern(/^.{1,50}$/),
        Validators.required
      ],
      message: 'Title must have a min. 1 and max. 30 characters!'
    },
    {
      label: 'Platform',
      key: 'platform',
      type: 'select',
      options: ['Wii', 'Wii U', 'Switch', 'PS4'],
      validators: [
        Validators.required
      ],
      message: 'You must select one!'
    },
    {
      label: 'Image',
      key: 'image',
      validators: [
        Validators.required
      ],
      message: `You can't leave this field empty.`
    },
    {
      label: 'Status',
      key: 'status',
      type: 'select',
      options: ['Not Played', 'Played', 'Finished', 'Completed'],
      validators: [
        Validators.required
      ],
      message: 'You must select one!'
    },
    {
      label: 'Release year',
      key: 'releaseYear',
      type: 'number',
      validators: [
        Validators.pattern(/^([1][9][5-9][0-9])|([2][0][0-5][0-9])$/),
        Validators.required
      ],
      message: 'Release year should be set between 1950 and 2059'
    },
    {
      label: 'Has a campaign',
      key: 'hasCampaign',
      type: 'checkbox',
      validators: [
      ],
      message: 'Release year should be set between 1950 and 2059'
    },
    {
      label: 'Owned',
      key: 'owned',
      type: 'checkbox',
      validators: [
      ],
      message: 'Release year should be set between 1950 and 2059'
    },
    {
      label: 'Format',
      key: 'format',
      type: 'select',
      options: ['Physical', 'eShop', 'PS Store', 'Steam'],
      validators: [
        Validators.required
      ],
      message: 'Please set a category.'
    }
  ]
  gameService: any;

  constructor() { }
}
