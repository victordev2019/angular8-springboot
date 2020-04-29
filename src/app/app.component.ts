import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Api-Rest';

  constructor(private router: Router){}
  ngOnInit(): void {
    if(localStorage.getItem('token') == null){
      this.router.navigate(['login']);
    }
  }

  public sair(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
 
}
