import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { AlumnoServiceService } from 'src/app/services/alumno-service.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})


export class PagosComponent {

  displayedColumns: string[] = ['nombre','turno','statusPago','tipoPago','pago','opciones'];

  constructor(
    private alumnoService : AlumnoServiceService,
    private dialog : MatDialog,
  ){}

  dataSource = new MatTableDataSource<any>([]);

  today = moment().format('DD-MM-YYYY')

  ngOnInit(){
    this.alumnoService.getalumnos()
    .subscribe(data =>{

      //console.log(data)

      this.dataSource.data = data

    })
  }

  async registrarPago(row : any){

    console.log(row)
    const result = await this.alumnoService.setPagoAlumno(row.id_alumnos, row.tipo_pago)
    console.log(result)
    this.ngOnInit()


  }


  canDelete(algo : any){
    let borrar : boolean
    //console.log(algo)
    algo.status_pago ?  borrar=false : borrar=true  

    return borrar
  }

  getFecha(fecha : any){

    let newDate = moment(new Date(fecha)).format('DD-MM-YYYY')
    return newDate
  }

  getStatusFechaPago(fecha: any){
    let newDate = new Date(fecha);  
    let today = new Date();  // Obteniendo la fecha actual

    if (newDate < today) {
      //console.log("La fecha es anterior a la fecha actual.");
      return "Pago Pendiente"

        
    } else if (newDate > today) {
       // console.log("La fecha es posterior a la fecha actual.");
        return "Sin Adeudos"
    } else {

        //console.log("La fecha es igual a la fecha actual.");
        return "DIA DE PAGO"
    }


  }


}
