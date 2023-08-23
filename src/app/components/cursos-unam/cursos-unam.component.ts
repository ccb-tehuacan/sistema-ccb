import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { CursosService } from 'src/app/services/cursos.service';


@Component({
  selector: 'app-cursos-unam',
  templateUrl: './cursos-unam.component.html',
  styleUrls: ['./cursos-unam.component.css']
})
export class CursosUnamComponent {

  dataSource = new MatTableDataSource<any[]>([]);
  
  displayedColumns : string [] = ['id','alumno_fk',]

  alumnos : any[] = []

  constructor(
    private cursosService : CursosService
  ){ }

  ciclo_escolar = new FormControl('2023');
  
  cicloEscolarSeleccionado  = this.ciclo_escolar.value?.toString()!

  async ngOnInit(){
    try {

      
      console.log(this.cicloEscolarSeleccionado)

      const alumnos = await this.cursosService.getAlumnosDelCurso(1,this.cicloEscolarSeleccionado );
      console.log(alumnos);
      
      this.alumnos = alumnos

      this.getCalificacionesAlumnos()


    } catch (error) {
      console.error('Error al obtener alumnos:', error);
    }

  }


  async getCalificacionesAlumnos(){
    try {

      
      const calificaciones = await this.cursosService.getCalificacionesMateriasAlumnos(1,this.cicloEscolarSeleccionado );
      console.log(calificaciones);
      
      

    } catch (error) {
      console.error('Error al obtener alumnos:', error);
    }
  }



}
