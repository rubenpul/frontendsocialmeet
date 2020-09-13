import { Component, OnInit } from '@angular/core';
import {InventarioService} from '../../services/inventario.service';
import { Inventario } from 'src/app/models/inventario';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
  providers: [InventarioService]
})
export class InventarioComponent implements OnInit {
  public page_title: string;
  public inventario: Inventario[];
  public status;

  constructor(
    private _inventarioService: InventarioService,

  ) { 
    this.page_title = "Inventario Social Meet "; 
  }

  ngOnInit(): void {
    this.Actualizar();

  }

  onSubmit(inv){
    this._inventarioService.register(inv).subscribe(
      response => {
        
        this.status = response['status'];
        this.Actualizar();
        
      },
      error =>{
        this.status = 'error';  
        console.log(<any>error);
      }
    );

  }

  Actualizar(){
    this._inventarioService.listarInventario().subscribe(
      response => {
        
        this.inventario = response;
  
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
