import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Asistencia} from '../../models/asistencia';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrls: ['./listarusuario.component.css'],
  providers: [UserService]
})
export class ListarusuarioComponent implements OnInit {
  public page_title: string;
  public users : User[];
  public asistencia: Asistencia;
  public status :  string;
  public descripcionmeet : string;
  public idmeet: string;
  public invitado: boolean;
  public message: string; 
 
  constructor(
    private _userService: UserService

  ) { 
    this.page_title = "Lista de Usuarios";
  
  }

  ngOnInit(): void {
    this._userService.listadousuarios().subscribe(
      response => {
        
       this.users = response;
             
      },
      error =>{
         
        console.log(<any>error);
      }
    );

    this.descripcionmeet = localStorage.getItem('motivo');
    this.idmeet = localStorage.getItem('meetid');

  }

  onSubmit(user){
    localStorage.removeItem('userid');
    localStorage.removeItem('nombrecompleto');
    localStorage.setItem('userid',user.id);
    localStorage.setItem('nombrecompleto',user.nombre + ' ' + user.apellido);
   

    this.asistencia = new Asistencia(0,+this.idmeet,this.descripcionmeet,+user.id,user.nombre + ' ' + user.apellido,false,'');
   
    this._userService.agregarusuariomeet(this.asistencia).subscribe(
      response => {
         
          this.status =  response['status'];
          this.message = response['message']; 
          
         
             
      },
      error =>{
        
        console.log(<any>error);
      }
    );

  }

}
