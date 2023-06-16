import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userEmail!:string;
  private userData!:string;
  private ApiUrl = "http://localhost:5000/users";

  constructor(private http:HttpClient, private router: Router) {}

  login(email:string, password:string):void {
    const loginUrl = `${this.ApiUrl}/login`
    const formData = {
      email: email,
      password: password
    }
    this.http.post(loginUrl, formData, {headers:this.getAuthHeaders()})
    .subscribe(
      (response:any) => {
        localStorage.setItem("token", response.token)
        console.log("response: ", response);
        this.userEmail = formData.email;
        this.router.navigate(['/perfilusuario']);
      },
      (error) => {
        if(error instanceof HttpErrorResponse){
          if(error.error instanceof ErrorEvent){
            console.log("Error: ", error.error.message);
          }
        else {
          console.error(`codigo de error ${error.status}` + `mensaje: ${error.error}`)
        }
        }
      }
    )
  }

  create(name:string,email:string,phone:string,documentId:string,password:string):void{
    const createUrl = `${this.ApiUrl}/create`
    const formData = {
      name: name,
      email: email,
      phone:phone,
      documentId:documentId,
      password: password
    }
    this.http.post(createUrl,formData)
    .subscribe(
      (response:any) => {
        console.log("Registro exitoso. ", response);
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }

  private getAuthHeaders():HttpHeaders{
    const authToken = localStorage.getItem("token");
    const headers = new HttpHeaders({"Authorization":`Bearer ${authToken}`});
    return headers;
  }


}
