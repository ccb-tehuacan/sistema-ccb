import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PruebaService } from 'src/app/services/prueba.service';


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
  ) { }

  title = 'front-ccb1';

  qrResultString  ?: string
 
  form = this.formBuilder.group({
    resultado : ['']
  })

  clearResult():void{
    this.qrResultString = '';
  }

  onCodeResult(resultString : string) {
    this.qrResultString = resultString
    console.log(this.qrResultString)
    this.form.get('resultado')?.setValue(this.qrResultString)
    //window.location.href = this.qrResultString
  }

  ngOnInit(): void {
    console.log("init")



    this.servicio.getalumnos(

    ).subscribe(data => {
      console.log(data)
    })
  }
}
