//everything created must be imported

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
//allows us to use app-routing.modules.ts

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
//add the parent directory if components are created side by side

import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';

import { UserService } from './users/user.service';
import { TriviaService } from './trivia/trivia.service';

import { TriviaComponent } from './trivia/trivia.component';
import { TriviaAddComponent } from './trivia/trivia-add/trivia-add.component';
import { TriviaPlayComponent } from './trivia/trivia-play/trivia-play.component';
import { TriviaListComponent } from './trivia/trivia-list/trivia-list.component';

import { FilterPipe } from './trivia/filter.pipe';
import { SortPipe } from './trivia/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersLoginComponent,
    UsersDashboardComponent,
    UsersDashboardComponent,
    TriviaComponent,
    TriviaAddComponent,
    TriviaPlayComponent,
    FilterPipe,
    SortPipe,
    TriviaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [UserService, TriviaService], //must be an array || add service(s)
  bootstrap: [AppComponent]
})
export class AppModule { }
