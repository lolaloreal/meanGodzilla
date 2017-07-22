//declaring paths (routes) in this is only for loading components

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersLoginComponent } from "./users/users-login/users-login.component"
import { UsersDashboardComponent } from "./users/users-dashboard/users-dashboard.component"

import { TriviaAddComponent } from "./trivia/trivia-add/trivia-add.component"
import { TriviaPlayComponent } from "./trivia/trivia-play/trivia-play.component"
import { TriviaListComponent } from "./trivia/trivia-list/trivia-list.component"

const routes: Routes = [
  { path: "login", component: UsersLoginComponent },
  { path: "dashboard", component: UsersDashboardComponent },
  { path: "play", component: TriviaPlayComponent },
  { path: "trivia/add", component: TriviaAddComponent },
  { path: "list", component: TriviaListComponent },
  { path: "", pathMatch: "full", redirectTo: "/login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
