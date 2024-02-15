import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(
    private http:HttpClient
  ) { }
  apiUrl:string=environment.apiRoute

  getalumnos():Observable<any[]>{
    const url:string=`${this.apiUrl}/alumnos`;
  
  return this.http.get<any[]>(url)
}
}
