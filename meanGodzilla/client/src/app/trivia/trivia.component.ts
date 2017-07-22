import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trivia } from './trivia';
import { TriviaService } from './trivia.service';
import { User } from './../users/user';
import { UserService } from './../users/user.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
    // trivia_list = [
    //     {name: 'Oreos are pretty nice.', score: 2/3, percentage: 66},
    // ];
    trivia_list: Array<Trivia>
    current_user: User
    search_text: String = ""

  constructor(private _triviaService: TriviaService,
    private _userService: UserService,
    private _router: Router) { }


  ngOnInit() {
      this._triviaService.get_all_trivia()
      .then(data => this.trivia_list = data)
      .catch(err => console.log(err))

      this._userService.get_logged_in_user()
      .then(data => {
        if (data) {
        this.current_user = data
      } else {
        this._router.navigate(["/login"])
      }
    })
    .catch(err => {console.log(err)})
    }

    getTrivia() {
      this._triviaService.get_all_trivia()
      .then((data)=> {
        this.trivia_list = data
      })
      .catch((err) => {console.log(err)})
    }

}
