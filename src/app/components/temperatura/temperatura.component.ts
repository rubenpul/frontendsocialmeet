import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Component({ 
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css'],
  providers: [WeatherService]
})
export class TemperaturaComponent implements OnInit {
  public weather;
  public tempactual;
  public tempmax;
  public tempmin;
  public descripcionicon;
  public weathercondicion;
  public place;
  public codplace;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(
      response => {
        
        this.weather = response;
        
        this.tempactual = Number(this.weather.main.temp) - 273.15;
        this.tempmax = Number(this.weather.main.temp_max) - 273.15;
        this.tempmin = Number(this.weather.main.temp_min) - 273.15;
        this.tempactual = this.tempactual.toFixed(1);
        this.tempmax = this.tempmax.toFixed(1);
        this.tempmin = this.tempmin.toFixed(1);
        this.descripcionicon = "assets/" + this.weather.weather[0].icon + ".png";
        this.weathercondicion = this.weather.weather[0].description;
        this.place = this.weather.name;
        this.codplace = this.weather.sys.country;  
      },
      error =>{
        console.log(error);
      }
    );
  }

}
