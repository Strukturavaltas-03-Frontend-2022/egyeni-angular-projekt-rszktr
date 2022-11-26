import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Game } from '../model/class/game';


@Injectable({
  providedIn: 'root'
})

export class GameService {

  firebaseUrl: string = environment.apiURL;
  entityName: string = 'games';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http
      .get<{ [key: string]: Game }>(`${this.firebaseUrl}${this.entityName}.json`)
      .pipe(
        map((serverData) => {
          const helperArray: Game[] = [];
          for (const key in serverData) {
            if (serverData.hasOwnProperty(key)) {
              helperArray.push({ ...serverData[key], uniqueId: key });
            }
          }
          return helperArray;
        })
      );
  }

  create(newTarget: Game) {
    return this.http.post(`${this.firebaseUrl}${this.entityName}.json`, newTarget);
  }

  remove(target: Game) {
    return this.http.delete(`${this.firebaseUrl}${this.entityName}/${target.firebaseId}.json`);
  }

  update(target: Game) {
    return this.http.patch(
      `${this.firebaseUrl}${this.entityName}/${target.firebaseId}.json`,
      target
    );
  }



}
