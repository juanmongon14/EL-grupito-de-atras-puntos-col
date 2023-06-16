import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  private nitComercio!:string;
  private ApiUrl = "http://localhost:5000/comercios";

  constructor(private http:HttpClient, private router: Router) {}

  login(nit:string, password:string):void {
    const loginUrl = `${this.ApiUrl}/login`
    const formData = {
      nit: nit,
      password: password
    }
    this.http.post(loginUrl, formData, {headers:this.getAuthHeaders()})
    .subscribe(
      (response:any) => {
        localStorage.setItem("token", response.token)
        console.log("response: ", response);
        this.nitComercio = formData.nit;
        this.router.navigate(['/perfilcomercio']);
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

  create(name:string,nameEmpresa:string,phone:string,nit:string,password:string):void{
    const createUrl = `${this.ApiUrl}/create`
    const formData = {
      name: name,
      nameEmpresa:nameEmpresa,
      phone:phone,
      nit:nit,
      password: password
    }
    this.http.post(createUrl,formData)
    .subscribe(
      (response:any) => {
        console.log("Registro exitoso. ", response);
        this.router.navigate(['/logincomercio']);
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }

  getComercio(){
    const getUrl = `${this.ApiUrl}/${this.nitComercio}`;
    return this.http.get(getUrl);
  }

  updateComercio(body:any){
    const updateUrl = `${this.ApiUrl}/update/${body._id}`
    const formData = body

    console.log("Usuario actualizado con éxito", formData, updateUrl);

    this.http.put(updateUrl,formData,{headers:this.getAuthHeaders()})
    .subscribe(
      (response:any) => {
        console.log("Usuario actualizado con éxito. ", response);
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
