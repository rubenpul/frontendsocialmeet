import { Component, OnInit,DoCheck } from '@angular/core';
import {MeetService} from '../../services/meet.service';
import {UserService} from '../../services/user.service';
import {WeatherService} from '../../services/weather.service';
import {InventarioService} from '../../services/inventario.service';
import { Inventario } from '../../models/inventario';
import { Meet } from '../../models/meet';
import { Meetinsumo } from '../../models/meetinsumo';
import { global } from '../../services/global';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consumomeet',
  templateUrl: './consumomeet.component.html',
  styleUrls: ['./consumomeet.component.css'],
  providers: [MeetService,UserService,WeatherService,InventarioService]
})
export class ConsumomeetComponent implements OnInit,DoCheck {
  public page_title: string;
  public cantidadusers : String = null;
  public descripcionmeet: string;
  public estimacionbotella: Number;
  public cantidadtotalbotella: Number;
  public inventariodisp : Inventario[];
  public meet : Meet;
 
  public totaldisponible: Number;
  public weather;
  public tempmax = null;
  public statusmeet: string;
  public fuerainventario : boolean;

  constructor(
    private _meetService: MeetService,
    private _userService: UserService,
    private _weatherService: WeatherService,
    private _inventarioService: InventarioService,
    private _router: Router

  ) { 
    this.page_title = "Estimación Birras para la Meet " + this._userService.getMotivoMeet();
    this.descripcionmeet = this._userService.getMotivoMeet();
  }

  ngOnInit(): void {
    
    this.estimacionMeet();

  }

  ngDoCheck(){
    
    if (typeof this.meet != 'undefined' &&  typeof this.inventariodisp != 'undefined' && this.tempmax != 'undefined' && this.cantidadusers != 'undefined'){
      
      this.statusmeet = this.meet.status;
      this.totaldisponible = this.inventariodisp[0]['cantidad_disp'];
      this.EstimarCantidadBotella(this.tempmax,this.cantidadusers)
      
      if (Number(this.totaldisponible) >= Number(this.cantidadtotalbotella)){
          this.fuerainventario = false;
      }
      else{
          this.fuerainventario = true;
      }  

    }  

  }

  estimacionMeet(){

    this._meetService.cantidadAsistentesMeet(this._userService.getIdMeet()).subscribe(
      response => {
        
        this.cantidadusers = response;
        
      },
      error =>{
        console.log(<any>error);
      }
    );

    this._meetService.getStatusMeet(this._userService.getIdMeet()).subscribe(
      response => {
        
        this.meet = response;
        
      },
      error =>{
        console.log(<any>error);
      }
    );

    //get weather
    this._weatherService.getWeather().subscribe(
      response => {
        
        this.weather = response;
             
        this.tempmax = Number(this.weather.main.temp_max) - 273.15;
        this.tempmax = this.tempmax.toFixed(1);
        
      },
      error =>{
        console.log(error);
      }
    );

    //inventario disponible

    this._inventarioService.listarInventario().subscribe(
      response => {
        
        this.inventariodisp = response;
        
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  EstimarCantidadBotella(tempmax,cantidadusers){
      

      if (Number(tempmax)> global.tempverano){
        this.estimacionbotella =  global.birraverano;
      }
      else{
        if (Number(tempmax) < global.tempinverno){
          this.estimacionbotella = global.birrainvierno;
        }
        else{
          this.estimacionbotella = global.birraprimavera;
        }
      }
      
      this.cantidadtotalbotella = Number(this.estimacionbotella) * Number(cantidadusers);

      this.cantidadtotalbotella =  Number(this.cantidadtotalbotella.toFixed(0));
    
  }

  onSubmit(status){
      console.log
      if (status == "RECARGAR"){
        this._router.navigate(['inventariomeet']);
      }
      else{
          if (status == "RESERVADO"){  
              let meetaux : Meet;
              
              meetaux = new Meet(this.meet.id,this.meet.motivo,this.meet.direccion,this.meet.detalle,this.meet.fechameet,this.meet.latitud,this.meet.longitud,status);
              let id_insumo =  this.inventariodisp[0]['id_insumo'];
              let meetinsumo : Meetinsumo;

              meetinsumo = new Meetinsumo(id_insumo,this.meet.id,this.cantidadtotalbotella);

                        

              this._meetService.actualizar(meetaux).subscribe(
                response => {
                  
                    if (response['id'] != ""){
                      
                        this._meetService.registrarReserva(meetinsumo).subscribe(
                          response => { 
                              
                              if (response['status'] == "success"){
                                

                                  this._inventarioService.actualizar(this.inventariodisp,this.cantidadtotalbotella).subscribe(
                                    response => {
                                      if (response['status'] == "success"){

                                          this.estimacionMeet();
                                      }
                                    },
                                    error =>{
                                      console.log(<any>error);
                                    }
                                  );
                                  
                              }  

                          },
                          error =>{
                            console.log(<any>error);
                          } 
                        );  

                    }
                },
                error =>{
                  console.log(<any>error);
                }
              );
          }    
      }
    
  }

}
