import { Component, OnInit } from '@angular/core';
import {Meet} from '../../models/meet';
import {MeetService} from '../../services/meet.service';
import {Router,ActivatedRoute} from '@angular/router';
import {Asistencia} from '../../models/asistencia';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-statusmeet',
  templateUrl: './statusmeet.component.html',
  styleUrls: ['./statusmeet.component.css'],
  providers: [MeetService,UserService]
})
export class StatusmeetComponent implements OnInit {
  public page_title: string;
  public statusmeets: Meet[];
  public status :  string;
  public consumo : boolean;
  public inscribir : boolean;
  public asistencia: Asistencia;
  public mensaje: string;
  public dondeMeet: boolean;

  constructor(
    private _meetService: MeetService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService
   
  ) { 
    this.page_title = "Ver Status Social Meet";
    

  }

  ngOnInit(): void {
    this._meetService.status('pendiente').subscribe(
      response => {
        
        this.statusmeets = response;
             
      },
      error =>{
        this.status = 'error';  
        console.log(<any>error);
      }
    );

    this._route.params.subscribe(params =>{
      let  beer = params['est'];
      this.consumo = false;
      this.inscribir = false;
      

      if(beer == 'estconsumo'){
          this.consumo = true;
      }

      if(beer == 'inscribir'){
        this.inscribir = true;
      }

      

    })
 
  }  

  onSubmit(meet,consumo,inscribir,actualizar){

    localStorage.removeItem('meetid');
    localStorage.removeItem('motivo');
    localStorage.setItem('meetid',meet.id);
    localStorage.setItem('motivo',meet.motivo);

    if(!inscribir){
      if (consumo){
        this._router.navigate(['consumomeet']);
      }
      else{ 
        if(actualizar){
          this._router.navigate(['actualizarmeet/' + meet.id]);
        }
        else{
          this._router.navigate(['listarusuario']);    
        }
        
      }
    }
    else{
      let identity : any;

      identity = this._userService.getIdentity();
       
      this.asistencia = new Asistencia(0,+meet.id,meet.motivo,+identity.id,identity.nombre + ' ' + identity.apellido,false,'');
   
      this._userService.agregarusuariomeet(this.asistencia).subscribe(
        response => {
              console.log(response);
              this.mensaje = response['message'];
              this.status = response['status'];
              
        },
        error =>{
          this.status = 'error';  
          console.log(<any>error);
        }
      );
    }  
  }

  dondeEs(meet){
    this.dondeMeet = false;
    localStorage.removeItem('lati');
    localStorage.removeItem('longi');
    localStorage.setItem('lati',meet.latitud);
    localStorage.setItem('longi',meet.longitud);
    
    this.dondeMeet = true;

  }
      
}
