import { Component } from '@angular/core';
import { ComercioService } from '../../Services/comercio.service';

@Component({
  selector: 'app-registro-comercio',
  templateUrl: './registro-comercio.component.html',
  styleUrls: ['./registro-comercio.component.css']
})
export class RegistroComercioComponent {

  name!:string;
  nameEmpresa!:string;
  phone!:string;
  nit!:string;
  password!:string;

  constructor(private ComercioService:ComercioService){}

  createComercio():void{
    this.ComercioService.create(this.name,this.nameEmpresa,this.phone,this.nit,this.password)
    alert("Usuario creado con éxito");
    console.log("user created");
  }

}
