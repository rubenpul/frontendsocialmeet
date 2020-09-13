import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public user : User;
  public status :  string;
  public message : string;

  constructor(
    private _userService: UserService
  ) { 
    this.page_title = "Registrate";
    this.user = new User(null,'','','','VISITANTE','','','');
  }

  ngOnInit(): void {

  } 

  onSubmit(form){
   
    this._userService.register(this.user).subscribe(
      response => {
        
        this.status = response['status'];
        this.message = response['message'];
        
        if (this.status == "success"){
            form.reset();        
        }
       
      },
      error =>{
        this.status = 'error';  
        console.log(<any>error);
      }
    );

  }

}
