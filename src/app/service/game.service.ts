import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Game } from '../model/class/game';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GameService {

  firebaseUrl: string = environment.apiURL;
  entityName: string = 'games';

  gameList$: Observable<Game[]> = this.getAll();

  constructor(
    private http: HttpClient
  ) {
  }

  getAll() {
    return this.http
      .get<{ [key: string]: Game }>(`${this.firebaseUrl}${this.entityName}.json`)
      .pipe(
        map((serverData) => {
          const helperArray: Game[] = [];
          for (const key in serverData) {
            if (serverData.hasOwnProperty(key)) {
              helperArray.push({ ...serverData[key], firebaseId: key });
            }
          }
          return helperArray;
        })
      );
  }

  get(firebaseId: string): Observable<Game> {
    return this.http.get<Game>(`${this.firebaseUrl}${this.entityName}/${firebaseId}.json`);
  }


  create(item: Game) {
    return this.http.post(`${this.firebaseUrl}${this.entityName}.json`, item);
  }

  remove(item: Game) {
    return this.http.delete(`${this.firebaseUrl}${this.entityName}/${item.firebaseId}.json`);
  }

  update(item: Game) {
    return this.http.patch(
      `${this.firebaseUrl}${this.entityName}/${item.firebaseId}.json`,
      item
    );
  }



}
