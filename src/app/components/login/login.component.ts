import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  public message: string;
  

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute

  ) { 
    this.page_title = 'Identificate';
    this.user = new User(null,'','','','','','','');
  }

  ngOnInit(): void {
    this.logout();
  }

  onSubmit(form){
    this._userService.signup(this.user).subscribe(
      response =>{

        this.status = response['status'];
        this.message = response['message'];
        
        if (this.status == "success"){
                  
          localStorage.setItem('token',response['token']);
          localStorage.setItem('identity',response['objeto']);
          
          this._router.navigate(['inicio']);

          localStorage.setItem('lati',"-34.638026");
          localStorage.setItem('longi',"-58.401654");
          
        }
       
         
        
       

      },
      error =>{
        this.status = 'error';
        console.log(<any>error);
      }
    )
  }

  logout(){
    this._route.params.subscribe(params =>{
      let logout = +params['sure'];

      if(logout == 1){
          localStorage.clear(); 
                   
          this._router.navigate(['inicio']);
      }

    }
      

    )

  }

}
