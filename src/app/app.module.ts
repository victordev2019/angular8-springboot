import { HttpInterceptorModule } from './service/header-interceptor.service';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './componente/usuario/usuario.component';
import { UsuarioAddComponent } from './componente/usuario/usuario-add/usuario-add.component';

export const appRouters: Routes = [
  {
    path : 'home', component : HomeComponent
  },
  {
    path: 'login', component : LoginComponent
  },
  {
    path: '', component : LoginComponent
  },
  {
    path: 'ListaUsuarios' , component: UsuarioComponent
  },
  {
    path: 'usuarioAdd', component: UsuarioAddComponent
  },
  {
    path: 'usuarioAdd/:id', component: UsuarioAddComponent
  }
];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
