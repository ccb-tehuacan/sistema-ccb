import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnoServiceService {

  constructor(
    private http:HttpClient
  ) { }
  apiUrl:string=environment.apiRoute

  getalumnos():Observable<any[]>{
    const url:string=`${this.apiUrl}/alumnos`;
  
  return this.http.get<any[]>(url)
  }

  getalumnosCursos():Observable<any[]>{
    
    const url:string=`${this.apiUrl}/alumnos-cursos`;
  
    return this.http.get<any[]>(url)
  }
  

  getNombreAlumno(id_alumno : number):Promise<any>{
    const url: string = `${this.apiUrl}/alumnos/nombre/${id_alumno}`;

    return new Promise<any>((resolve, reject) => {
      this.http.get<any>(url).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });


  }

  saveAlumnos(alumnosData: Alumno): Observable<any> {
    const url: string = `${this.apiUrl}/alumnos`

    return this.http.post<any>(url, alumnosData);
  }

  getAlumnoPromise(nombre:string,apellido_paterno:string,apellido_materno:string,fecha_nacimiento:string):Promise<any>{
    const url:string=`${this.apiUrl}/alumnos/get-alumno/${nombre}/${apellido_paterno}/${apellido_materno}/${fecha_nacimiento}`;
  
    return this.http.get<any[]>(url).toPromise()
  }



}
