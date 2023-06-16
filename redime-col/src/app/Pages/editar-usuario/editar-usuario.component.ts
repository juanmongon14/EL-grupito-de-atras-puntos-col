import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  userProfile!:any;
  editValue:boolean=false;

  editProfile(){
    this.editValue=true;
  }

  constructor(private UserService:UserService){}

  updateProfile(){
    this.UserService.getUser()
    .subscribe(
      (response:any) => {
        this.userProfile = response;
      })
    this.UserService.updateUser(this.userProfile)
  }

  cancelUpdate(){
    this.editValue=false;
  }
}
