import { Component } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {

  constructor(
    private servicio:PruebaService
    
  ){ }

  ngOnInit():void{
    console.log("init")


this.servicio.getalumnos(

).subscribe(data=>{
  console.log(data)
})  
}
}
