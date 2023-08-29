import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Asistencias } from '../interfaces/asistencia.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private http :HttpClient
  ) { }

  apiUrl : string = environment.apiRoute

  // getAlumnosDelCurso(id:number, ciclo_escolar:string){
  //   const url : string = `${this.apiUrl}/alumnos-cursos/alumnos/${id}/${ciclo_escolar}`
  //   return this.http.get<any[]>(url);
  // }


  getAlumnosDelCurso(id: number, ciclo_escolar: string): Promise<any[]> {
    const url: string = `${this.apiUrl}/alumnos-cursos/alumnos/${id}/${ciclo_escolar}`;
    
    return new Promise<any[]>((resolve, reject) => {
      this.http.get<any[]>(url).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getCalificacionesMateriasAlumnos(id_alumno: number, ciclo_escolar: string): Promise<any[]> {
    const url: string = `${this.apiUrl}/alumnos-cursos/calificaciones/${id_alumno}/${ciclo_escolar}`;
    
    return new Promise<any[]>((resolve, reject) => {
      this.http.get<any[]>(url).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  asignarCalificacion(alumno:number, materia:number, calificacion:number):Promise<any>{
    const url: string = `${this.apiUrl}/alumnos-cursos/asignar-calificaciones/${alumno}/${materia}/${calificacion}`;
    
    return new Promise<any[]>((resolve, reject) => {
      this.http.get<any[]>(url).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }







}
