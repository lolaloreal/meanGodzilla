import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trivia } from './../trivia';
import { TriviaService } from './../trivia.service';
import { User } from './../../users/user';
import { UserService } from './../../users/user.service';

@Component({
  selector: 'app-trivia-add',
  templateUrl: './trivia-add.component.html',
  styleUrls: ['./trivia-add.component.css']
})
export class TriviaAddComponent implements OnInit {
    new_trivia = new Trivia;
    current_user: User;

  constructor(private _triviaService: TriviaService,
    private _userService: UserService,
    private _router: Router) { }

  ngOnInit() {
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
    addTrivia() {
      this._triviaService.create_trivia(this.new_trivia)
      .then(() => {this._router.navigate(["/dashboard"])})
      .catch((err) => {console.log(err)})
  }

}
