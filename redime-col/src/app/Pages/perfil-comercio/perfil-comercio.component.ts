import { Component, OnInit } from '@angular/core';
import { ComercioService } from '../../Services/comercio.service';

@Component({
  selector: 'app-perfil-comercio',
  templateUrl: './perfil-comercio.component.html',
  styleUrls: ['./perfil-comercio.component.css']
})
export class PerfilComercioComponent {
  comercioProfile!:any;

  constructor(private ComercioService:ComercioService){}

  ngOnInit(){
    this.getComercio();
  }

  getComercio(){
    this.ComercioService.getComercio()
    .subscribe(
      (response:any) => {
        console.log("response: ",response);
        this.comercioProfile = response;
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }
}
