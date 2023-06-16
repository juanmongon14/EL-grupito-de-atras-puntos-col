import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  name!:string;
  email!:string;
  phone!:string;
  documentId!:string;
  password!:string;

  constructor(private userService:UserService){}

  createUser():void{
    this.userService.create(this.name,this.email,this.phone,this.documentId,this.password)
    alert("Usuario creado con éxito");
    console.log("user created");
  }

}
