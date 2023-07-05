import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnoServiceService } from 'src/app/services/alumno-service.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  displayedColumns: string[] = ['nombre','turno','statusPago','tipoPago','pago','opciones'];

  constructor(
    private alumnoService : AlumnoServiceService
  ){}

  dataSource = new MatTableDataSource<any>([]);

  ngOnInit(){
    this.alumnoService.getalumnos()
    .subscribe(data =>{

      console.log(data)

      this.dataSource.data = data

    })
  }

  getTipoPago(tipoPago : number){
    let formaPago: string
    switch(tipoPago){
      case 1:
        formaPago = 'Pago Semanal en efectivo'
        return formaPago;
      case 2:
        formaPago = 'Pago Quincenal en efectivo'
        return formaPago;
      case 3:
        formaPago = 'Pago Mensual en efectivo'
        return formaPago;
      case 4:
        formaPago = 'Pago Semanal con tarjeta'
        return formaPago;
      case 5:
        formaPago = 'Pago Quincenal con tarjeta '
        return formaPago;
      case 6:
        formaPago = 'Pago Mensual con tarjeta'
        return formaPago;
      default:
        formaPago = ''
        return formaPago;
    }

  }


  editar(objeto: any) {
    console.log(objeto)
  }

  eliminar(objeto: any) {
    console.log(objeto)
  }

}
