import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlumnoServiceService } from 'src/app/services/alumno-service.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-dialog-calificaciones',
  templateUrl: './dialog-calificaciones.component.html',
  styleUrls: ['./dialog-calificaciones.component.css']
})
export class DialogCalificacionesComponent implements OnInit{

  constructor(
    private alumnosCursoServices : CursosService,
    public dialogRef: MatDialogRef<DialogCalificacionesComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: { 
      nombre: any,
      alumno_calificaciones: any[]
    },
    private formBuilder: UntypedFormBuilder,
    private snack : MatSnackBar
  ){}

  formMaterias = this.formBuilder.group({
    calificacion: ['', Validators.required],
  })

  alumno : string = ''
  calificaciones : any[] = []

  ngOnInit(): void {
    console.log(this.data.alumno_calificaciones)
    this.alumno = this.data.nombre.nombre
    this.calificaciones = this.data.alumno_calificaciones
    console.log(this.alumno)

   
   // 
  }

  async calificar(materia : any){
    //datos a buscar

    

    let alumno = parseInt(this.data.nombre.id_alumnos)
    let _materia = parseInt(materia.id_materia)

    console.log(materia.calificion)
    console.log(this.formMaterias.controls['calificacion'].value)

    const res_calificacion = await this.alumnosCursoServices.asignarCalificacion(alumno,_materia,this.formMaterias.controls['calificacion'].value)

    this.snack.open('Calificacion Asignada','ok')

  }




}
