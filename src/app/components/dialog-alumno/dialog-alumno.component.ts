import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-alumno',
  templateUrl: './dialog-alumno.component.html',
  styleUrls: ['./dialog-alumno.component.css']
})
export class DialogAlumnoComponent implements OnInit{
  
  ngOnInit(){
    this.notificacion();
  }

  notificacion() {
    const audio = new Audio('assets/sounds/sonido_notificación.mp3');
    audio.play();
  }
  
  onNoClick(){

  }
  
}
