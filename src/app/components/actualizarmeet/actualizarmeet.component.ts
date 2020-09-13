import { Component, OnInit } from '@angular/core';
import {Meet} from '../../models/meet';
import {MeetService} from '../../services/meet.service';
import {Router,ActivatedRoute} from '@angular/router';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-actualizarmeet',
  templateUrl: './actualizarmeet.component.html',
  styleUrls: ['./actualizarmeet.component.css'],
  providers: [MeetService]
})
export class ActualizarmeetComponent implements OnInit {
  public page_title: string;
  public meet : Meet;
  public status :  string;
  public id_meet: string;
  public motivo: string;
  public fechaactual: Date;

  constructor(
    private _meetService: MeetService,
    private datePipe: DatePipe,
    private _route: ActivatedRoute

  ) { 

    this.page_title = "Actualizar Meet";
    this.meet = new Meet(null,'','','','','','','');
    
    this._route.params.subscribe(params =>{
        this.id_meet = params['idmeet'];
    })

  } 

  ngOnInit(): void {
    this._meetService.meetDetalle(this.id_meet).subscribe(
      response => {
        
       
        this.meet = response;
        this.meet.fechameet = this.datePipe.transform(this.meet.fechameet, 'dd/MM/yyyy');
         
        this.fechaactual = new Date();
       

      },
      error =>{
        this.status = 'error';  
        console.log(<any>error);
      }
    );

  }

  onSubmit(form){ 
    
   
    this.meet.fechameet = this.datePipe.transform(this.meet.fechameet, 'yyyy-MM-dd');
    

    this._meetService.actualizar(this.meet).subscribe(
      response => {
       
        
        this.id_meet = response['id_meet'];
        this.motivo = response['motivo'];

        if (response['id_meet'] != ""){
          this.status = "success";
          this.meet.fechameet = this.datePipe.transform(this.meet.fechameet, 'dd/MM/yyyy');
        }
        else{
          this.status = "error";
        }

      },
      error =>{
        this.status = 'error';  
        console.log(<any>error);
      }
    );

  }

}
