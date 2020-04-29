import { Usuario } from './../../model/usuario';
import { UsuarioService } from './../../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students: Observable<Usuario[]>;
  nome: String;
  
  constructor(private usuarioService: UsuarioService) { }
  
  carregaUsuarios(){
    this.usuarioService.getStudentList()
      .subscribe(data => {
        this.students = data;
      });
  }
  ngOnInit() {
    this.carregaUsuarios();
  }

  deleteUsuario(id: Number) {
    if(confirm("Deseja realmente excluir esse registro?")){
    this.usuarioService.deletarUsuario(id)
      .subscribe(data => {
        console.log("Retorno do método dele : " + data);
        this.carregaUsuarios();
     
       });
  }
}
  consultarUser(){
    if(this.nome !== undefined && this.nome !== ""){
    this.usuarioService.consultarUser(this.nome)
    .subscribe(
      data =>{
        this.students = data;
      }
    
    );
    }else{
      this.usuarioService.getStudentList().subscribe(data =>{
        this.students = data;
      })
    }
  }
}



