import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./AppComponent";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioPaginaComponent } from './components/inicio-pagina/inicio-pagina.component';
import { LoginComponent } from './components/login/login.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { Interfaz1Component } from './components/menu1/interfaz1/interfaz1.component';
import { Interfaz2Component } from './components/menu1/interfaz2/interfaz2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioPaginaComponent,
    LoginComponent,
    CrearCuentaComponent,
    Interfaz1Component,
    Interfaz2Component,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
