import { AppConstants } from './../app-constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

 

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario){
    
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario))
    .subscribe(
      data => {
        let token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
        localStorage.setItem("token", token);
        this.router.navigate(['home'])
        //console.log("Usuário autenticado com sucesso");
        
      },
      error => {
        console.error("Usuário/ ou senha inválidos");
        alert('Acesso Negado!')
      }
    )
  }
}
