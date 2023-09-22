import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ScannerComponent } from './components/scanner/scanner.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { DialogAlumnoComponent } from './components/dialog-alumno/dialog-alumno.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


import { MaterialDesignModule } from './MaterialDesign/material-design.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { CursosBuapComponent } from './components/cursos-buap/cursos-buap.component';
import { CursosUnamComponent } from './components/cursos-unam/cursos-unam.component';
import { DialogAgregarAlumnoComponent } from './components/dialog-agregar-alumno/dialog-agregar-alumno.component';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { DialogCalificacionesComponent } from './components/dialog-calificaciones/dialog-calificaciones.component';
import { PagosComponent } from './components/pagos/pagos.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ScannerComponent,
    AlumnosComponent,
    DialogAlumnoComponent,
    LoginComponent,
    DashboardComponent,
    TablaAlumnosComponent,
    CursosBuapComponent,
    CursosUnamComponent,
    DialogAgregarAlumnoComponent,
    DialogCalificacionesComponent,
    PagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ZXingScannerModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MaterialDesignModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    NgxQRCodeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
