import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { MeetComponent } from './components/meet/meet.component';
import { StatusmeetComponent } from './components/statusmeet/statusmeet.component';
import { ListarusuarioComponent } from './components/listarusuario/listarusuario.component';
import { ConsumomeetComponent } from './components/consumomeet/consumomeet.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { MismeetsComponent } from './components/mismeets/mismeets.component';
import { ActualizarmeetComponent } from './components/actualizarmeet/actualizarmeet.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout/:sure', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'crearmeet', component: MeetComponent},
  {path: 'statusmeet', component: StatusmeetComponent},
  {path: 'listarusuario', component: ListarusuarioComponent},
  {path: 'statusmeet/:est', component: StatusmeetComponent},
  {path: 'actualizarmeet/:idmeet', component: ActualizarmeetComponent},
  {path: 'consumomeet', component: ConsumomeetComponent},
  {path: 'inventariomeet', component: InventarioComponent},
  {path: 'mismeets', component: MismeetsComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
