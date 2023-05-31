import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { PruebaService } from 'src/app/services/prueba.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private servicio: PruebaService
  ) { }
  dataSource = new MatTableDataSource<any>([]);
  alumnos: any[] = []
  displayedColumns: string[] = [
    'nombre',
    'apellido_paterno'

  ];
  ngOnInit(): void {
    this.servicio.getalumnos()
    .subscribe(data => {
      console.log(data)
      const _alumnos: any[] = []
      data.forEach(alumno => {
        const _alumno: any = {
          nombre: alumno.nombre,
          apellido_paterno: alumno.apellido_paterno


        }
        _alumnos.push(_alumno)

      })
      this.alumnos = _alumnos

      console.log(this.alumnos)
      this.dataSource.data = data
    })
  }
}
