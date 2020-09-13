import { Component, OnInit } from '@angular/core';
import {MeetService} from '../../services/meet.service';
import { Meet } from '../../models/meet';
import { Meetinsumo } from '../../models/meetinsumo';

@Component({
  selector: 'app-asignacionbebida',
  templateUrl: './asignacionbebida.component.html',
  styleUrls: ['./asignacionbebida.component.css']
})
export class AsignacionbebidaComponent implements OnInit {
  public page_title: string;
  public meets: Meet[];

  constructor(
    private _meetService: MeetService,
     

  ) { 
    this.page_title = "Estimación Birras para la Meet "

  }

  ngOnInit(): void {
    
    this._meetService.status('RESERVADO').subscribe(
      response => {
        
        this.meets = response;

        
             
      },
      error =>{
       
        console.log(<any>error);
      }
    );


  }

}
