import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
import { Asistencias } from 'src/app/interfaces/asistencia.interface';
import * as moment from 'moment';
import { AsistenciasService } from 'src/app/services/asistencias.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-alumno',
  templateUrl: './dialog-alumno.component.html',
  styleUrls: ['./dialog-alumno.component.css']
})
export class DialogAlumnoComponent implements OnInit{
  
  datos_alumno : string = ''
  
  id_alumno : string = ''
  nombre_alumno :string = ''
  apellido_paterno : string = ''
  apellido_materno : string = ''

  grupo_alumno : string =''

  constructor(
    public dialogRef : MatDialogRef<DialogAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data : {alumno : string},
    private asistenciaService : AsistenciasService,
    private snackBar:  MatSnackBar,
  ){ }

  ngOnInit(){
    this.notificacion();
    this.datos_alumno = this.data.alumno
    const nombre = this.datos_alumno.split('\n')
    
    const id = nombre[0]
    const nombre_separated = nombre[1].split(' ')
    const grupo = nombre[2]

    this.grupo_alumno = grupo
    
    let size : number = nombre_separated.length
    //console.log(size)
    
    if(nombre_separated.length>3){
      //console.log("Mas de 2 nombres")
      
      

      this.apellido_materno = nombre_separated[size-1]
      this.apellido_paterno = nombre_separated[size-2]

      //console.log(this.apellido_materno)
      //console.log(this.apellido_paterno)
      const nombre = nombre_separated.filter(name => name !== this.apellido_materno && name !== this.apellido_paterno)
      
      nombre.forEach(nombre=>{
        this.nombre_alumno += nombre+' '
      })

    }else{
     //console.log("Menos de 2 nombres")
      this.nombre_alumno = nombre_separated[0]
      this.apellido_paterno = nombre_separated[1]
      this.apellido_materno = nombre_separated[2]
    }
  
    //const hoy : string = moment().format('yyyy-MM-D,HH:mm');
    const hoy : string = moment().format('YYYY-MM-DD');
    const hora: string = moment().format('hh:mm:ss ZZ')
    const objAsistencia : any ={
      id_alumno : parseInt(id),
      fecha : hoy,
      hora : hora
    }

    console.log(objAsistencia)

    this.registrarAsistencia(objAsistencia.id_alumno, objAsistencia.fecha, objAsistencia.hora)


    
  }

  

  notificacion() {
    const audio = new Audio('assets/sounds/sonido_notificación.mp3');
    audio.play();
  }
  
  onNoClick(){
    this.dialogRef.close();
  }
  
  registrarAsistencia(id_alumno:number,fecha:string, hora:string){
    this.asistenciaService.registrarAsistencia(id_alumno,fecha, hora)
    .subscribe(res=>{
      
      res.forEach((a: any )=>{
        let mensaje : string = ''
        if(a.ccb_registrar_asistencia.asistencia){
          console.log(a.ccb_registrar_asistencia.mensaje)
          mensaje  = a.ccb_registrar_asistencia.mensaje
          this.snackBar.open(mensaje, 'Cerrar', {
            duration: 7000, // Duración en milisegundos
            panelClass: ['snackbar-success'], // Clase CSS para el estilo del snackbar
          });
        }else{
          console.log(a.ccb_registrar_asistencia.mensaje)
          mensaje  = a.ccb_registrar_asistencia.mensaje
          this.snackBar.open(mensaje, 'Cerrar', {
            duration: 7000, // Duración en milisegundos
            panelClass: ['snackbar-error'], // Clase CSS para el estilo del snackbar
          });
        }

      })
      
    })
  }

  
}


