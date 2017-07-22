//service is a middleman (almost like our own library)
//transfers the information from client side to server side||both ways
//then go to app module and ADD it
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
//must import this it is gives access to post and get
import { User } from './user'
//must import user class
import "rxjs"

@Injectable()
export class UserService {

  constructor(private _http: Http) { }//must include this in the constructor
  //the methods we use are post and get, therefore we need the Http library

  login(user: User){
      //take in something that HAS to be a USER
    return this._http.post("/login", user)
    //this communicates with routes.js which calls the method located in users.js
    //this will match .post or .get
            .map(data => data.json())
            .toPromise()
  }
  //no then or catch
  //always return a promise

  get_all_users(){
    return this._http.get("/all_users")
            .map(data => data.json())
            .toPromise()
  }

  get_logged_in_user(){
    return this._http.get("/get_logged_in_user")
            .map(data => data.json())
            .toPromise()
  }

}
