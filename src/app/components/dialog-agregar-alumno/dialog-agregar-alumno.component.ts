import { CDK_TREE_NODE_OUTLET_NODE } from '@angular/cdk/tree';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnoServiceService } from 'src/app/services/alumno-service.service';
import { QRCodeComponent } from 'ngx-qrcode2';


@Component({
  selector: 'app-dialog-agregar-alumno',
  templateUrl: './dialog-agregar-alumno.component.html',
  styleUrls: ['./dialog-agregar-alumno.component.css']
})
export class DialogAgregarAlumnoComponent implements OnInit {

  formTutor = this.formBuilder.group({
    nombre_tutor: ['', Validators.required],
    apellido_paterno_tutor: ['', Validators.required],
    apellido_materno_tutor: ['', Validators.required],
    telefono_tutor: ['', Validators.required],
  })

  formAlumno = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido_paterno: ['', Validators.required],
    apellido_materno: ['', Validators.required],
    fecha_nacimiento: ['', Validators.required],
    tipo_pago: ['', Validators.required],
    pago_mensual: ['', Validators.required],
    descuento : [0],
    fecha_pago: ['', Validators.required],
    tipo_alumno: ['', Validators.required],
    correo: ['', Validators.required],
    telefono: ['', Validators.required],
    turno: ['', Validators.required],
    ciclo_escolar: ['', Validators.required],
    proxima_fecha_pago: ['', Validators.required],
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private alumnoService : AlumnoServiceService
  ) { }

  textoParaQR: string = ''

  ngOnInit() {

  }

  guardarAlumno() {

  }

  saveTutor() {
    console.log(this.formTutor.value)
  }

  saveAlumno() {
    console.log(this.formAlumno.value)

    let id = "1"
    let nombre = id + '\n' + this.formAlumno.get('nombre')?.value + ' ' + this.formAlumno.get('apellido_paterno')?.value + ' ' + this.formAlumno.get('apellido_materno')?.value

    console.log(nombre)
  }


  @ViewChild('qrImage') qrImage ?: ElementRef 

  async getQR() {

    const _Alumno: Alumno = {
      nombre          : this.formAlumno.get('nombre')?.value,
      apellido_paterno: this.formAlumno.get('apellido_paterno')?.value,
      apellido_materno: this.formAlumno.get('apellido_materno')?.value,
      fecha_nacimiento: this.formAlumno.get('fecha_nacimiento')?.value,

      tipo_pago    : parseInt(this.formAlumno.get('tipo_pago')?.value),
      pago_mensual : this.formAlumno.get('pago_mensual')?.value,
      descuento    : parseInt(this.formAlumno.get('descuento')?.value??0),
      fecha_pago   : this.formAlumno.get('fecha_pago')?.value,
      tipo_alumno  : this.formAlumno.get('tipo_alumno')?.value,
      correo      : this.formAlumno.get('correo')?.value,
      telefono    : this.formAlumno.get('telefono')?.value,
      turno       : this.formAlumno.get('turno')?.value,

      ciclo_escolar           : this.formAlumno.get('ciclo_escolar')?.value,
      proxima_fecha_pago      : this.formAlumno.get('proxima_fecha_pago')?.value,
      nombre_tutor            : this.formTutor.get('nombre_tutor')?.value,
      apellido_paterno_tutor  : this.formTutor.get('apellido_paterno_tutor')?.value,
      apellido_materno_tutor  : this.formTutor.get('apellido_materno_tutor')?.value,
      telefono_tutor          : this.formTutor.get('telefono_tutor')?.value,
    }

    console.log(_Alumno)

    this.alumnoService.saveAlumnos(_Alumno)
    .subscribe(res=> {
      console.log(res)
    },err =>{
      console.log(err)
    })


    const alumno = await this.alumnoService.getAlumnoPromise(
      this.formAlumno.get('nombre')?.value,
      this.formAlumno.get('apellido_paterno')?.value,
      this.formAlumno.get('apellido_materno')?.value,
      moment(_Alumno.fecha_nacimiento).format('YYYY-MM-DD')
    )

    console.log(alumno)

    let id = parseInt(alumno.id_alumnos)
    let nombre = id + '\n' + this.formAlumno.get('nombre')?.value + ' ' + this.formAlumno.get('apellido_paterno')?.value + ' ' + this.formAlumno.get('apellido_materno')?.value + '\n' + 'BU_M5'

    console.log(nombre)
    this.textoParaQR = nombre


    const img = this.qrImage?.nativeElement
    img.src = NgxQRCodeModule.toDataURL(textoParaQR)


  }

}
