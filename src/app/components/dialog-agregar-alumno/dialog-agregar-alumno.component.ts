import { CDK_TREE_NODE_OUTLET_NODE } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-agregar-alumno',
  templateUrl: './dialog-agregar-alumno.component.html',
  styleUrls: ['./dialog-agregar-alumno.component.css']
})
export class DialogAgregarAlumnoComponent implements OnInit{

  formTutor = this.formBuilder.group({
    nombre_tutor            : ['', Validators.required],
    apellido_paterno_tutor  : ['', Validators.required],
    apellido_materno_tutor  : ['', Validators.required],
    telefono                : ['', Validators.required],
  })

  formAlumno = this.formBuilder.group({   
    nombre            : ['', Validators.required],
    apellido_paterno  : ['', Validators.required],
    apellido_materno  : ['', Validators.required],
    fecha_nacimiento  : ['', Validators.required],
    tipo_pago         : ['', Validators.required],
    pago_mensual      : ['', Validators.required],
    descuento         : ['', Validators.required],
    fecha_pago        : ['', Validators.required],
    tipo_alumno       : ['', Validators.required],
    correo            : ['', Validators.required],
    telefono          : ['', Validators.required],
    turno             : ['', Validators.required],
    ciclo_escolar     : ['', Validators.required],
    proxima_fecha_pago: ['', Validators.required],
  });

  constructor(
    private formBuilder : UntypedFormBuilder
  ){  }

  textoParaQR : string = ''

  ngOnInit(){

  }

  guardarAlumno(){

  }

  saveTutor(){
    console.log(this.formTutor.value)
  }

  saveAlumno(){
    console.log(this.formAlumno.value)

    let id = "1"
    let nombre = id+'\n'+this.formAlumno.get('nombre')?.value +' '+this.formAlumno.get('apellido_paterno')?.value+' '+this.formAlumno.get('apellido_materno')?.value

    console.log(nombre)
  }

  getQR(){
    let id = "1"
    let nombre = id+'\n'+this.formAlumno.get('nombre')?.value +' '+this.formAlumno.get('apellido_paterno')?.value+' '+this.formAlumno.get('apellido_materno')?.value +'\n'+'BU_M5'

    console.log(nombre)
    this.textoParaQR = nombre
  }

}
