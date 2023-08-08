import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnoServiceService } from 'src/app/services/alumno-service.service';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent {

  dataSource = new MatTableDataSource<any>([]);
  
  constructor (
    private alumnocursos_service:AlumnoServiceService
  ){}

  ngOnInit(){
    
    this.alumnocursos_service.getalumnosCursos()
    .subscribe(res=>{
      console.log(res)
    })
  }
}
