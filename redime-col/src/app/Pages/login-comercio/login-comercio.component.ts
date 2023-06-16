import { Component } from '@angular/core';
import { ComercioService } from '../../Services/comercio.service';

@Component({
  selector: 'app-login-comercio',
  templateUrl: './login-comercio.component.html',
  styleUrls: ['./login-comercio.component.css']
})
export class LoginComercioComponent {

  nit!:string;
  password!:string;

  constructor(private ComercioService:ComercioService){}

  loginComercio(){

    this.ComercioService.login(this.nit, this.password)
    alert("Ingreso exitoso");
    console.log("email: ", this.nit);
    console.log("password: ", this.password);
  }

}
