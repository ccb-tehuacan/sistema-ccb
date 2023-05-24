import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-alumno',
  templateUrl: './dialog-alumno.component.html',
  styleUrls: ['./dialog-alumno.component.css']
})
export class DialogAlumnoComponent implements OnInit{
  

  alumnoNombre : String = ''

  ngOnInit(){
    this.notificacion();
    this.alumnoNombre = this.data.alumno
  }

  

  constructor(
    public dialogRef : MatDialogRef<DialogAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data : {alumno : string}
  ){ }

  notificacion() {
    const audio = new Audio('assets/sounds/sonido_notificación.mp3');
    audio.play();
  }
  
  onNoClick(){

  }
  
}
