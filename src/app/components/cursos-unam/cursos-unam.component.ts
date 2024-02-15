import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { CursosService } from 'src/app/services/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCalificacionesComponent } from '../dialog-calificaciones/dialog-calificaciones.component';


@Component({
  selector: 'app-cursos-unam',
  templateUrl: './cursos-unam.component.html',
  styleUrls: ['./cursos-unam.component.css']
})
export class CursosUnamComponent {

  dataSource = new MatTableDataSource<any[]>([]);
  
  displayedColumns : string [] = ['id','alumno_fk','opciones']

  alumnos : any[] = []

  constructor(
    private cursosService : CursosService,
    private dialog : MatDialog,
  ){ }

  ciclo_escolar = new FormControl('2023');
  
  cicloEscolarSeleccionado  = this.ciclo_escolar.value?.toString()!

  async ngOnInit(){
    try {

      
      console.log(this.cicloEscolarSeleccionado)

      const alumnos = await this.cursosService.getAlumnosDelCurso(1,this.cicloEscolarSeleccionado );
      console.log(alumnos);
      
      this.alumnos = alumnos

      //this.getCalificacionesAlumnos()


    } catch (error) {
      console.error('Error al obtener alumnos:', error);
    }

  }


  async getCalificacionesAlumnos(something : any){
    try {

      console.log(something)

      let id : number = parseInt(something.id_alumnos)
      console.log(id)

      const calificaciones = await this.cursosService.getCalificacionesMateriasAlumnos(id,this.cicloEscolarSeleccionado);
      console.log(calificaciones);
      
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
