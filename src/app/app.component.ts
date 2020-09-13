import { Component,DoCheck} from '@angular/core';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements DoCheck{
  public title = 'SocialMeet';
  public identity;
  public token;

  constructor(
    public _userService: UserService
  ){
    this.loadUser();
  }

  ngDoCheck(){

    this.loadUser();

  }

  loadUser(){
    this.identity = this._userService.getIdentity();
  }

}
