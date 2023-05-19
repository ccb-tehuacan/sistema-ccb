import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './components/prueba/prueba.component';
import { AppComponent } from './app.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';

const routes: Routes = [
  {
    path:'' ,
    component: ScannerComponent 
  },
  {
    path:'prueba' ,
    component: PruebaComponent 
  },
  {
    path:'alumno' ,
    component: AlumnosComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
