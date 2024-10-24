import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://127.0.0.1:8000/'

  options = {headers: new HttpHeaders({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })}

  constructor(private http: HttpClient) { }

  public getLogin(usuario: string, password:string):Observable<any>{
    return this.http.post(this.url+'login/?username='+usuario+'&password='+password, null)
  }

  public getCursos(profesor_id: number):Observable<any>{
    return this.http.get(this.url+profesor_id)
  }
}
