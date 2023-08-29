import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-calificaciones',
  templateUrl: './dialog-calificaciones.component.html',
  styleUrls: ['./dialog-calificaciones.component.css']
})
export class DialogCalificacionesComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<DialogCalificacionesComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: { 
      nombre: any,
      alumno_calificaciones: any[]
    },
  ){}


  alumno : string = ''
  calificaciones : any[] = []

  ngOnInit(): void {
    console.log(this.data.alumno_calificaciones)
    this.alumno = this.data.nombre.nombre
    this.calificaciones = this.data.alumno_calificaciones
    console.log(this.alumno)
  }




}
