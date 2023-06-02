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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
