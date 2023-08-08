import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

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
  
}
