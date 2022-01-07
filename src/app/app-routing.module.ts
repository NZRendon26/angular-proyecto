import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { FooterComponent } from './components/footer/footer.component';

import { InicioPaginaComponent } from './components/inicio-pagina/inicio-pagina.component';
import { LoginComponent } from './components/login/login.component';
import { Interfaz1Component } from './components/menu1/interfaz1/interfaz1.component';
import { Interfaz2Component } from './components/menu1/interfaz2/interfaz2.component';

const routes: Routes = [
  { path:'',component:InicioPaginaComponent},

  { path:'inicio-pagina', component: InicioPaginaComponent },
  { path:'login', component:LoginComponent},
  { path:'crear-cuenta', component: CrearCuentaComponent },   
  { path:'footer', component:FooterComponent},
  { path:'header/interfaz1', component:Interfaz1Component},
  { path:'header/interfaz2', component:Interfaz2Component}, 
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
