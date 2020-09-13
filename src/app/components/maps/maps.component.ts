import { Component, OnInit } from '@angular/core';
import {GoogleMapsModule} from '@angular/google-maps';
import {MeetService} from '../../services/meet.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
  providers: [MeetService]
})
export class MapsComponent implements OnInit {
   
  
  center = {lat:Number(localStorage.getItem('lati')), lng:Number(localStorage.getItem('longi'))};
  zoom = 15;
  display?:google.maps.LatLngLiteral;

  ngOnInit(): void {
  }

}
