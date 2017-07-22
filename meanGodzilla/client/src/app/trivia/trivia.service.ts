import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Trivia } from './trivia';

@Injectable()
export class TriviaService {

  constructor(private _http: Http) { }

  get_all_trivia(){
    return this._http.get('/dashboard')
    .map(data => data.json())
    .toPromise()
  }

  create_trivia(trivia){
      return this._http.post('/trivia/add', trivia)
      .map(data => data.json())
      .toPromise()

  }
}
