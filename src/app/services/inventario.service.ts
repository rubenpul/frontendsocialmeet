import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Inventario} from '../models/inventario';
import {global} from './global';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  public url: string;
  public identity: string;
  public token: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = global.url;
  }

  register(inventario){
    
    return this._http.post(this.url + 'inventario/guardar', 
				{
          id_insumo : inventario.id_insumo,
          descripcion : inventario.descripcion  ,
          cantidad_disp : Number(inventario.cantidad_disp) + Number(inventario.cantidad_ingresar),
          cantidad_usada : 0,
          cantidad_ingresar : 0
				}
		);
  }

  listarInventario(){
   
    return this._http.get<Inventario[]>(this.url + 'inventario/listar/', 
				{
          
				}
		);
  }

  actualizar(inventario,cantidad){
    
    return this._http.post(this.url + 'inventario/guardar', 
				{
          id_insumo : inventario[0]['id_insumo'],
          descripcion : inventario[0]['descripcion'],
          cantidad_disp : Number(inventario[0]['cantidad_disp']) - Number(cantidad),
          cantidad_usada : 0,
          cantidad_ingresar : 0
				}
		);
  }


}
