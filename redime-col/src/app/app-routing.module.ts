import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { SobrenosotrosComponent } from './Pages/sobrenosotros/sobrenosotros.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'productos', component:ProductosComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'nosotros', component:SobrenosotrosComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
