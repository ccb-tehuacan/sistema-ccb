import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnoServiceService } from 'src/app/services/alumno-service.service';
import { CursosService } from 'src/app/services/cursos.service';
import { DialogCalificacionesComponent } from '../dialog-calificaciones/dialog-calificaciones.component';

@Component({
  selector: 'app-cursos-buap',
  templateUrl: './cursos-buap.component.html',
  styleUrls: ['./cursos-buap.component.css']
})
export class CursosBuapComponent {
[x: string]: any;

  dataSource = new MatTableDataSource<any[]>([]);
  
  displayedColumns : string [] = ['id','alumno_fk','opciones']

  alumnos : any[] = []

  constructor(
    private cursosService : CursosService,
    private alumnoService : AlumnoServiceService ,
    private dialog : MatDialog,
  ){ }

  ciclo_escolar = new FormControl('2023');
  
  cicloEscolarSeleccionado  = this.ciclo_escolar.value?.toString()!

  async ngOnInit(){
    try {

      
      console.log(this.cicloEscolarSeleccionado)

      const alumnos = await this.cursosService.getAlumnosDelCurso(3,this.cicloEscolarSeleccionado );
      console.log(alumnos);
      
      this.alumnos = alumnos

     // this.getCalificacionesAlumnos()


    } catch (error) {
      console.error('Error al obtener alumnos:', error);
    }

  }


  async getCalificacionesAlumnos(something : any){
    try {

      console.log(something)
      let id :number = parseInt(something.id_alumnos)
      console.log(id)

      
      const calificaciones = await this.cursosService.getCalificacionesMateriasAlumnos(id,this.cicloEscolarSeleccionado );
      //console.log(calificaciones);
      
      const dialog = this.dialog.open(DialogCalificacionesComponent,{
        data:{
          nombre : something,
          alumno_calificaciones : calificaciones
        }
      })


      

    } catch (error) {
      console.error('Error al obtener alumnos:', error);
    }
  }


}
