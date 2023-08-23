import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnoServiceService } from 'src/app/services/alumno-service.service';



@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent {

  dataSource = new MatTableDataSource<any[]>([]);
  
  displayedColumns : string [] = ['id','alumno_fk',]

  constructor (
    private alumnocursos_service:AlumnoServiceService
  ){}

  asistentencias : any[] = []

  ngOnInit(){
    
    this.alumnocursos_service.getalumnosCursos()
    .subscribe((res : any) =>{
      //console.log(res)
      
      res.forEach((element:any) => {
        this.asistentencias.push(element)
      });

      console.log(this.asistentencias)
    })
  }
}
