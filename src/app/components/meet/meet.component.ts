import { Component, OnInit } from '@angular/core';
import {Meet} from '../../models/meet';
import {MeetService} from '../../services/meet.service';


import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css'],
  providers: [MeetService]
})
export class MeetComponent implements OnInit {
  public page_title: string;
  public meet : Meet;
  public status :  string;
  public id_meet: string;
  public motivo: string;
  public fechaactual: Date;

  constructor(
    private _meetService: MeetService,
    private datePipe: DatePipe

  ) { 
    this.page_title = "Agregar Social Meet";
    this.meet = new Meet(null,'','','','','','','PENDIENTE');
    this.status = 'PENDIENTE';
   
  }

  ngOnInit(): void {
    
    this.fechaactual = new Date();
  }


  onSubmit(form){ 
    
    this.meet.fechameet = this.datePipe.transform(this.meet.fechameet, 'yyyy-MM-dd');
    
    this._meetService.register(this.meet).subscribe(
      response => {
       
        console.log(response);

        this.id_meet = response['id'];
        this.motivo = response['motivo'];

        if (response['id'] != ""){
          this.status = "success";
        }
        else{
          this.status = "error";
        }

        localStorage.setItem('meetid',response['id']);
        localStorage.setItem('motivo',response['motivo']);

        form.reset();
      },
      error =>{
        this.status = 'error';  
        console.log(<any>error);
      }
    );

  }


}
