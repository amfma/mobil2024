import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://mc12-server.onrender.com/'

  options = {headers: new HttpHeaders({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })}

  constructor(private http: HttpClient) { }

  public getLogin(usuario: string, password:string):Observable<any>{
    return this.http.post(this.url+'login/?username='+usuario+'&password='+password, null)
  }

  public getCursos(profesor_id: number):Observable<any>{
    return this.http.get(this.url+'profesor/'+profesor_id)
  }

  public getSesiones(curso_id:number):Observable<any>{
    return this.http.get(this.url+'sesiones/'+curso_id)
  }

  public createSesion(curso_id:number):Observable<any>{
    return this.http.post(this.url+'cursos/nueva_sesion?curso_id='+curso_id, null)
  }

  public actualizarAsistencia(url:string, user_id:number):Observable<any>{
    return this.http.post(url+user_id, null)
  }
}
