import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './components/prueba/prueba.component';
import { AppComponent } from './app.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'' ,
    component: DashboardComponent 
  },
  {
    path:'login' ,
    component: LoginComponent 
  },
  {
    path:'prueba' ,
    component: PruebaComponent 
  },
  {
    path:'alumnos' ,
    component: AlumnosComponent 
  },
  {
    path:'dashboard' ,
    component: DashboardComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
