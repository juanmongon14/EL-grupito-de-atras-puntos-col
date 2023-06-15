import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!:string;
  password!:string;

  constructor(private UserService:UserService){}

  loginUser(){

    this.UserService.login(this.email, this.password)

    console.log("email: ", this.email)
    console.log("password: ", this.password);
  }


}
