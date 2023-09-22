import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PruebaService } from 'src/app/services/prueba.service';
import { DialogAlumnoComponent } from '../dialog-alumno/dialog-alumno.component';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
  

  constructor(
    private servicio: PruebaService,
    private router: Router,
    private formBuilder :  UntypedFormBuilder,
    private dialog: MatDialog,
  ) { }

  title = 'front-ccb1';

  qrResultString  ?: string
  activar_camara : boolean = false

  form = this.formBuilder.group({
    resultado : ['']
  })

  activarCamara(){
    this.activar_camara=true
  }

  clearResult():void{
    this.qrResultString = '';
  }

  onCodeResult(resultString : string) {
    this.qrResultString = resultString
    console.log(this.qrResultString)
    this.form.get('resultado')?.setValue(this.qrResultString)
    
    this.mostrarDialog()
  }

  mostrarDialog(){
    this.activar_camara=false
    const dialogRef = this.dialog.open(DialogAlumnoComponent, {
      data: {
        alumno : this.qrResultString
      },
    }); 
  }
  

  ngOnInit(): void {
    console.log("init")

    

    this.servicio.getalumnos(

    ).subscribe(data => {
      console.log(data)
    })
  }

  


}
