import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { MeetComponent } from './components/meet/meet.component';
import { StatusmeetComponent } from './components/statusmeet/statusmeet.component';
import { ListarusuarioComponent } from './components/listarusuario/listarusuario.component';
import { ConsumomeetComponent } from './components/consumomeet/consumomeet.component';
import { TemperaturaComponent } from './components/temperatura/temperatura.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { MismeetsComponent } from './components/mismeets/mismeets.component';
import { MapsComponent } from './components/maps/maps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {GoogleMapsModule} from '@angular/google-maps';
import { DatePipe } from '@angular/common';
import { ActualizarmeetComponent } from './components/actualizarmeet/actualizarmeet.component';
import { AsignacionbebidaComponent } from './components/asignacionbebida/asignacionbebida.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    MeetComponent,
    StatusmeetComponent,
    ListarusuarioComponent, 
    ConsumomeetComponent,
    TemperaturaComponent,
    InventarioComponent,
    MismeetsComponent,
    MapsComponent,
    ActualizarmeetComponent,
    AsignacionbebidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    GoogleMapsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
