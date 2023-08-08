import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './components/prueba/prueba.component';
import { AppComponent } from './app.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { CursosBuapComponent } from './components/cursos-buap/cursos-buap.component';

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
    path:'asistencias' ,
    component: PruebaComponent 
  },
  {
    path:'alumnos' ,
    component: AlumnosComponent 
  },
  {
    path:'dashboard' ,
    component: DashboardComponent
  },
  {
    path:'alumno-cursos' ,
    component: TablaAlumnosComponent
  },
  {
    path:'cursos-buap' ,
    component: CursosBuapComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
