import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {global} from './global';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatheruri: string;
 

  constructor(private _http: HttpClient) { 
   
    this.weatheruri = global.URI + global.city + global.apiid + global.apiKey;

  }

  getWeather(city = null){
    if (city === null){
      return this._http.get(this.weatheruri);
    }
    else{
      
    }
    
  }


}
