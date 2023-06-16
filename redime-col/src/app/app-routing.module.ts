import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { SobrenosotrosComponent } from './Pages/sobrenosotros/sobrenosotros.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { LoginComercioComponent } from './Pages/login-comercio/login-comercio.component';
import { RegistroComercioComponent } from './Pages/registro-comercio/registro-comercio.component';
import { PerfilUsuarioComponent } from './Pages/perfil-usuario/perfil-usuario.component';
import { PerfilComercioComponent } from './Pages/perfil-comercio/perfil-comercio.component';
import { EditarUsuarioComponent } from './Pages/editar-usuario/editar-usuario.component';
import { EditarComercioComponent } from './Pages/editar-comercio/editar-comercio.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'productos', component:ProductosComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'nosotros', component:SobrenosotrosComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'logincomercio', component:LoginComercioComponent},
  {path:'registrocomercio', component:RegistroComercioComponent},
  {path:'perfilusuario', component:PerfilUsuarioComponent},
  {path:'perfilcomercio',component:PerfilComercioComponent},
  {path:'editarusuario',component:EditarUsuarioComponent},
  {path:'editarcomercio',component:EditarComercioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
