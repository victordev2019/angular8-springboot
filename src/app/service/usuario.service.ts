import { AppConstants } from './../app-constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

   }

   getStudentList(): Observable<any>{
     return this.http.get<any>(AppConstants.baseUrl);
   }

   getStudent(id): Observable<any>{
     return this.http.get<any>(AppConstants.baseUrl + id)
   }

   deletarUsuario(id: Number): Observable<any>{
     return this.http.delete(AppConstants.baseUrl + id, {responseType : 'text'});
   }

   consultarUser(nome:String): Observable<any>{
     return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);
   }
  }