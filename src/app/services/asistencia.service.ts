import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {global} from './global';
import {Asistencia} from '../models/asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  public url: string;
  public identity: string;
  public token: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = global.url;
  }

  verMeetsbyUser(user){
   
    return this._http.get<Asistencia[]>(this.url + 'asistencia/detalleasistente/' + user, 
				{
          
				}
		);
  }

  actualizarEstatusAsistenciaUsuario(asistencia){
   
    return this._http.post(this.url + 'asistencia/update', 
				{
          id_asistencia: asistencia.id_asistencia,
          id_meet: asistencia.id_meet,
          meet: asistencia.meet,
          id_usuario: asistencia.id_usuario,
          nombreusuario: asistencia.nombreusuario,
          asistio: asistencia.asistio,
          observaciones: asistencia.observaciones
				}
		);
  }

 

}
 