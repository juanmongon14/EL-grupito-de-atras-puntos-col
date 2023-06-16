import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {
  userProfile!:any;

  constructor(private UserService:UserService){}

  ngOnInit(){
    this.getUser();
  }

  getUser(){
    this.UserService.getUser()
    .subscribe(
      (response:any) => {
        console.log("response: ",response);
        this.userProfile = response;
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }
}
