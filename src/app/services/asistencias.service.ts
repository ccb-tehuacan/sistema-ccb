import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Asistencias } from '../interfaces/asistencia.interface';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  constructor(
    private http :HttpClient
  ) { }

  apiUrl : string = environment.apiRoute

  registrarAsistencia(id:number, fecha:string, hora:string):Observable<any>{
    const url : string = `${this.apiUrl}/asistencias/registrar-asistencia/${id}/${fecha}/${hora}`;
    return this.http.get<any>(url);
  } 




}
