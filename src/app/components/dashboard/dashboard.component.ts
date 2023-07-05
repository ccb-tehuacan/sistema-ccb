import { Component } from '@angular/core';
import { AlumnoServiceService } from 'src/app/services/alumno-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    private alumnoService : AlumnoServiceService
  ){}

    unam = '/assets/img/unam_logo.png'
    buap = '/assets/img/buap_logo.jpg'
  ngOnInit(){
    
  }



}
