import { Component, OnInit } from '@angular/core';
import {Asistencia} from '../../models/asistencia';
import {Meet} from '../../models/meet';
import {AsistenciaService} from '../../services/asistencia.service';
import {UserService} from '../../services/user.service';
import {MeetService} from '../../services/meet.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-mismeets',
  templateUrl: './mismeets.component.html',
  styleUrls: ['./mismeets.component.css'],
  providers: [AsistenciaService,UserService,MeetService]
})
export class MismeetsComponent implements OnInit {
  public asistencia : Asistencia[];
  public detallemeet : Meet;
  public page_title: string;
  public status: string;
  public id: number;
  public descripcion : string;
  public detalle: boolean = false;
  public experiencia : boolean = false;
  public nombremeet : string;
  public user : User;
  public txtexperiencia: string;

  constructor(
    private _asistenciaService: AsistenciaService,
    private _userService: UserService,
    private _meetService: MeetService
  ) { 
    this.page_title = "Mis Meets";
    
  }

  ngOnInit(): void {
    let identity : any;

    identity = this._userService.getIdentity();


    this._asistenciaService.verMeetsbyUser(identity.id).subscribe(
      response => {
          
          this.asistencia = response;
  
      },
      error =>{
        this.status = 'error';  
        console.log(<any>error);
      }
    );

  }

  onSubmit(asistencia){
   
    this.experiencia = false;

  
    

    this._meetService.meetDetalle(asistencia.id_meet).subscribe(
      response => {
        console.log(response);
        if (response != null){
            this.detallemeet = response;
            this.detalle = true;
            localStorage.setItem('lati',this.detallemeet.latitud);
            localStorage.setItem('longi',this.detallemeet.longitud);
           
            localStorage.setItem('idasistencia',asistencia.id_asistencia);
            localStorage.setItem('idmeet',asistencia.id_meet);
            localStorage.setItem('idusuario',asistencia.id_usuario);
            localStorage.setItem('meet',asistencia.meet);
            localStorage.setItem('nombreusuario',asistencia.nombreusuario);
        }
      },
      error =>{
        this.status = 'error';  
        console.log(<any>error);
      }
    );

  }

  setRadio(input: HTMLInputElement,asist){
    
    if (input.checked === true){
      this.detalle = false;
      this.experiencia = true;
      this.nombremeet = asist.meet

      localStorage.setItem('idasistencia',asist.id_asistencia);
      localStorage.setItem('idmeet',asist.id_meet);
      localStorage.setItem('idusuario',asist.id_usuario);
      localStorage.setItem('meet',asist.meet);
      localStorage.setItem('nombreusuario',asist.nombreusuario);
    }
    else{
      this.experiencia = false;
    }  
  }

  enviarObservaciones(form){

    let asistencia : Asistencia;
    let idasistencia : number;
    let idmeet: number;
    let idusuario: number;
    let meet: string;
    let nombreusuario: string;

    idasistencia = Number(localStorage.getItem('idasistencia'));
    idmeet = Number(localStorage.getItem('idmeet'));
    idusuario = Number(localStorage.getItem('idusuario'));
    meet = localStorage.getItem('meet');
    nombreusuario = localStorage.getItem('nombreusuario');

    asistencia = new Asistencia(idasistencia,idmeet,meet,idusuario,nombreusuario,true,this.txtexperiencia);

    console.log(asistencia);
    this._asistenciaService.actualizarEstatusAsistenciaUsuario(asistencia).subscribe(
      response => {
          
          console.log(response);
  
      },
      error =>{
        
        console.log(<any>error);
      }
    );
    form.reset();
  }

}
