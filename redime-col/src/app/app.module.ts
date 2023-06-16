import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { SobrenosotrosComponent } from './Pages/sobrenosotros/sobrenosotros.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PerfilUsuarioComponent } from './Pages/perfil-usuario/perfil-usuario.component';
import { PerfilComercioComponent } from './Pages/perfil-comercio/perfil-comercio.component';
import { EditarUsuarioComponent } from './Pages/editar-usuario/editar-usuario.component';
import { EditarComercioComponent } from './Pages/editar-comercio/editar-comercio.component';
import { LoginComercioComponent } from './Pages/login-comercio/login-comercio.component';
import { RegistroComercioComponent } from './Pages/registro-comercio/registro-comercio.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    HeaderComponent,
    ContactoComponent,
    SobrenosotrosComponent,
    LoginComponent,
    RegistroComponent,
    FooterComponent,
    PerfilUsuarioComponent,
    PerfilComercioComponent,
    EditarUsuarioComponent,
    EditarComercioComponent,
    LoginComercioComponent,
    RegistroComercioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
