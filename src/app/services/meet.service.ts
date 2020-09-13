import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {global} from './global';
import {Meet} from '../models/meet';

@Injectable({
  providedIn: 'root'
})
export class MeetService {
  public url: string;
  public identity: string;
  public token: string;
  public longitud: string;
  public latitud: string;

  constructor(
    public _http: HttpClient

  ) { 

    this.url = global.url;

  }

  register(meet){
 
    return this._http.post(this.url + 'meet/guardar', 
				{
          fechameet : meet.fechameet,
          motivo  : meet.motivo,
          direccion :meet.direccion,
          latitud : meet.latitud,
          longitud : meet.longitud,
          detalle : meet.detalle,
          status : meet.status
				}
		);
  }

  actualizar(meet){
 
    return this._http.post(this.url + 'meet/guardar', 
				{
          id : meet.id,
          fechameet : meet.fechameet,
          motivo  : meet.motivo,
          direccion :meet.direccion,
          latitud : meet.latitud,
          longitud : meet.longitud,
          detalle : meet.detalle,
          status : meet.status
				}
		);
  }

  registrarReserva(meetinsumo){
    
    return this._http.post(this.url + 'meetinsumo/guardar', 
				{
          id_insumo : meetinsumo.id_insumo,
          id_meet : meetinsumo.id_meet,
          cantidad :meetinsumo.cantidad
				}
    );
    
  }

  status(status){
   
    return this._http.get<Meet[]>(this.url + 'meet/verstatus/' + status, 
				{
          
				}
		);
  }

  cantidadAsistentesMeet(id_meet){
    
    return this._http.get<String>(this.url + 'asistencia/asistentes/' + id_meet, 
				{
          
				}
		);
  }

  getStatusMeet(id_meet){
   
    return this._http.get<Meet>(this.url + 'meet/vermeetstatus/' + id_meet, 
				{
          
				}
		);
  }

  meetDetalle(meetid){
   
    return this._http.get<Meet>(this.url + 'meet/detallemeet/' + meetid, 
				{
          
				}
		);
  }

  getLongitud(){

    let longitud;

    if (localStorage.getItem('longitud') && localStorage.getItem('longitud') != 'undefined'){
      longitud = JSON.parse(localStorage.getItem('longitud'));
      this.longitud = longitud;
    }
    else{
      this.longitud = null;
    }

    return this.longitud;

  }

  getLatitud(){

    let latitud;

    if (localStorage.getItem('latitud') && localStorage.getItem('latitud') != 'undefined'){
      latitud = JSON.parse(localStorage.getItem('latitud'));
      this.latitud = latitud;
    }
    else{
      this.latitud = null;
    }

    return this.latitud;

  }

}
