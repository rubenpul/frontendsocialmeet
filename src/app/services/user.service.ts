import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {global} from './global';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  public identity: string;
  public token: string;
  public meetid: number;
  public motivomeet: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = global.url;
  }

  register(user){
   
    return this._http.post(this.url + 'usuario/guardar', 
				{
          id : user.id,
          nombre : user.nombre.toUpperCase(),
          apellido :user.apellido.toUpperCase(),
          email : user.email,
          rol : user.rol,
          password : user.password,
          descripcion : user.descripcion,	
          imagen : ""
				}
		);
  }

  signup(user,getToken = null){
    if (getToken != ""){
   
      return this._http.post(this.url + 'usuario/login', 
          {
            id : user.id,
            password : user.password
           
          }
      );

    }
    else{
      user.getToken = true;
    }

  }

  
  agregarusuariomeet(asistencia){
    
    return this._http.post(this.url + 'asistencia/guardar', 
				{
          id_meet: asistencia.id_meet,
          meet: asistencia.meet,
          id_usuario: asistencia.id_usuario,
          nombreusuario:  asistencia.nombreusuario,
          asistio: asistencia.asistio,
          observaciones: asistencia.observaciones
				}
		);
  }

  listadousuarios(){
   
    return this._http.get<User[]>(this.url + 'usuario/listar', 
				{
          
				}
		);
  }


  getIdentity(){

    let identity;

    if (localStorage.getItem('identity') && localStorage.getItem('identity') != 'undefined'){
      identity = JSON.parse(localStorage.getItem('identity'));
      this.identity = identity;
    }
    else{
      this.identity = null;
    }

    return this.identity;

  }

  getToken(){
    let token = localStorage.getItem('token');

    if (token && token != 'undefined'){
      this.token = token;
    }
    else{
      this.token = null;
    }

    return this.token;
  }

  getIdMeet(){
    let meetid = localStorage.getItem('meetid');
    
    if (meetid && meetid != 'undefined'){
      this.meetid = +meetid;
    }
    else{
      this.meetid = null;
    }

    return this.meetid;

  }

  getMotivoMeet(){
    let motivomeet = localStorage.getItem('motivo');
    
    if (motivomeet && motivomeet != 'undefined'){
      this.motivomeet = motivomeet;
    }
    else{
      this.motivomeet = null;
    }

    return this.motivomeet;

  }
  
}
